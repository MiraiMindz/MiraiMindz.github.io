export let bashCodeBlock01: string;
export let goCodeBlock01: string;
export let javaCodeBlock01: string;
export let nasmCodeBlock01: string;
export let plainTextCodeBlock01: string;
export let pythonCodeBlock01: string;

bashCodeBlock01 = `str="Movendo Arquivo1"            # Primeira Instrução
printf "%s\\n" "\${str}"            # Segunda Instrução
mv -vi Arquivo1.ext /diretorio1/  # Terceira Instrução
printf "%s\\n" "Concluido"         # Quarta Instrução`

goCodeBlock01 = `package main

import "fmt"

// Aqui nós declaramos a primeira função
func funcao_print_1() {
    fmt.Println("Função 1")
}

// Aqui nós declaramos a segunda função
func funcao_print_2() {
    fmt.Println("Função 2")
}

func main() {
    funcao_print_2() // Aqui chamamos a segunda
    funcao_print_1()  // Aqui chamamos a primeira
}`

plainTextCodeBlock01 = `String texto = "Esse aqui é um texto" # Linguagens Estaticas
texto = "Esse aqui é um texto"        # Linguagens Dinâmicas`

javaCodeBlock01 = `public class Program {
    public static void main(String[] args) throws Exception {
        String str = "Olá Mundo";
        System.out.println(str);
    }
}`

nasmCodeBlock01 = `section .data
str db "Olá Mundo!", 0xA  ; Declara a variavel str="Olá Mundo!" e adiciona o LineFeed
len equ $ - str           ; Coleta o tamanho em bits da variavel

global _start
section .text
_start:
mov eax, 4                ; Usa o código de operação do kernel SYS_WRITE
mov ebx, 1                ; Usa o StdIO, nesse caso, usaremos o StdIn
mov ecx, str              ; Move a variavel str para parametro const_char
mov edx, len              ; Move o tamanho em bits da variavel para o parametro size_t
int 0x80                  ; Chama o kernel para performar a operação

mov eax, 1                ; Usa o código de operação do kernel SYS_EXIT
int 0x80                  ; Chama o kernel para performar a operação`


pythonCodeBlock01 = `print("Olá Mundo!")`
