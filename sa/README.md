# sa README

sa é uma extensão para o Visual Studio Code que fornece suporte à linguagem SeteAo(.sa), incluindo destaque de sintaxe e verifica automaticamente erros usando um mini-compilador desenvolvido em TypeScript (Pamdu-Ali).


## Features

Esta extensão inclui:
-Suporte a arquivos `.sa`
-Destaque de sintaxe
-Exibição de erros directamente no editor

## Requirements

Para desenvolvimento da extensão:

- Node.js instalado
- Visual Studio Code
- TypeScript

Para uso da extensão:

- Nenhuma configuração adicional necessária.

## Using
01.Olá, mundo!
VAR ola = "Olá, mundo!" : TEXTO.
EXIBIR(ola).

02.Fluxo de controle
VAR nota = 15 : INTEIRO.

SE (nota >= 18) {
    EXIBIR("Excelente").
} SENAO SE (nota >= 14) {
    VAR n = 10: INTEIRO.
    EXIBIR(n).
    EXIBIR("Bom").

} SE (nota > 10 E nota != 1000) {
    EXIBIR("Suficiente").
}
 SENAO {
    EXIBIR("Insuficiente")
}

03.Fluxo de repetições

VAR i: INTEIRO.

PARA(i = 0; i < 10; i = i + 1) {
    SE(i == 3) {
        EXIBIR("CONTINUANDO NO CONTINUE").
        CONTINUAR.
    }
        EXIBIR("SAINDO NO CONTINUE").

    SE(i == 7) {
        EXIBIR("ENTRANDO NO PARA 1").
        PARAR.
    }

    EXIBIR("i =", i, " aqui").
}

04.Funções
FUNCAO INTEIRO soma(REAL: d, REAL : e) {
  VAR resultado: REAL.
  resultado = d + e.
  RETORNAR resultado.
}
EXIBIR(soma(a,12)).

FUNCAO LOGICO test() {
  SE (VERDADEIRO) {
    RETORNAR FALSO.
  } SENAO {
    RETORNAR VERDADEIRO.
  }
}

VAR resultado  = test(): LOGICO.

EXIBIR("O resultado E:", resultado).



## For more information

https://pamduvali-documentacao.vercel.app/
