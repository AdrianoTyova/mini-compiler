import * as vscode from 'vscode';
import { exec } from 'child_process';

let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {

	console.log('SeteAO extension ativa!');

	// Cria coleção de diagnósticos
	diagnosticCollection = vscode.languages.createDiagnosticCollection('seteao');
	context.subscriptions.push(diagnosticCollection);

	// Executa ao salvar arquivo
	vscode.workspace.onDidSaveTextDocument(document => {
		if (document.languageId === 'seteao') {
			runCompiler(document);
		}
	});

	// Comando manual para executar
	const runCommand = vscode.commands.registerCommand('seteao.run', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;
		runCompiler(editor.document);
	});

	context.subscriptions.push(runCommand);
}

function runCompiler(document: vscode.TextDocument) {

	const filePath = document.fileName;

	//  Ajustar o caminho caso seja necessário
	exec(`node dist/compiler.js "${filePath}"`, (error, stdout, stderr) => {

		diagnosticCollection.clear();

		if (!stderr) {
			vscode.window.showInformationMessage("Compilado com sucesso!");
			return;
		}

		const diagnostics: vscode.Diagnostic[] = [];

		// Ajuste esse regex conforme a saída real do Pamdu-Ali
		const regex = /linha (\d+), coluna (\d+): (.*)/i;

		const match = stderr.match(regex);

		if (match) {

			const line = parseInt(match[1]) - 1;
			const column = parseInt(match[2]) - 1;
			const message = match[3];

			const range = new vscode.Range(
				new vscode.Position(line, column),
				new vscode.Position(line, column + 1)
			);

			const diagnostic = new vscode.Diagnostic(
				range,
				message,
				vscode.DiagnosticSeverity.Error
			);

			diagnostics.push(diagnostic);
		}

		diagnosticCollection.set(document.uri, diagnostics);
	});
}

export function deactivate() {}
