export let CodeBlock01: string;
export let CodeBlock02: string;
export let CodeBlock03: string;
export let CodeBlock04: string;
export let CodeBlock05: string;
export let CodeBlock06: string;
export let CodeBlock07: string;
export let CodeBlock08: string;
export let CodeBlock09: string;
export let CodeBlock10: string;
export let CodeBlock11: string;
export let CodeBlock12: string;
export let CodeBlock13: string;
export let CodeBlock14: string;
export let CodeBlock15: string;
export let CodeBlock16: string;
export let CodeBlock17: string;
export let CodeBlock18: string;
export let CodeBlock19: string;
export let CodeBlock20: string;
export let CodeBlock21: string;
export let CodeBlock22: string;
export let CodeBlock23: string;
export let CodeBlock24: string;
export let CodeBlock25: string;
export let CodeBlock26: string;
export let CodeBlock27: string;
export let CodeBlock28: string;
export let CodeBlock29: string;
export let CodeBlock30: string;
export let CodeBlock31: string;
export let CodeBlock32: string;
export let CodeBlock33: string;
export let CodeBlock34: string;
export let CodeBlock35: string;
export let CodeBlock36: string;
export let CodeBlock37: string;
export let CodeBlock38: string;
export let CodeBlock39: string;
export let CodeBlock41: string;
export let CodeBlock42: string;
export let CodeBlock43: string;
export let CodeBlock44: string;
export let CodeBlock45: string;
export let CodeBlock46: string;
export let CodeBlock47: string;
export let CodeBlock48: string;
export let CodeBlock49: string;
export let CodeBlock40: string;
export let CodeBlock50: string;
export let CodeBlock51: string;
export let CodeBlock52: string;
export let CodeBlock53: string;
export let CodeBlock54: string;
export let CodeBlock55: string;


export let AnswerBlock01: string;
export let AnswerBlock02: string;
export let AnswerBlock03: string;
export let AnswerBlock04: string;
export let AnswerBlock05: string;
export let AnswerBlock06: string;
export let AnswerBlock07: string;
export let AnswerBlock08: string;
export let AnswerBlock09: string;
export let AnswerBlock10: string;
export let AnswerBlock11: string;
export let AnswerBlock12: string;
export let AnswerBlock13: string;
export let AnswerBlock14: string;
export let AnswerBlock15: string;
export let AnswerBlock16: string;
export let AnswerBlock17: string;
export let AnswerBlock18: string;
export let AnswerBlock19: string;
export let AnswerBlock20: string;
export let AnswerBlock21: string;
export let AnswerBlock22: string;
export let AnswerBlock23: string;
export let AnswerBlock24: string;
export let AnswerBlock25: string;
export let AnswerBlock26: string;
export let AnswerBlock27: string;
export let AnswerBlock28: string;
export let AnswerBlock29: string;
export let AnswerBlock30: string;
export let AnswerBlock31: string;
export let AnswerBlock32: string;
export let AnswerBlock33: string;
export let AnswerBlock34: string;
export let AnswerBlock35: string;
export let AnswerBlock36: string;
export let AnswerBlock37: string;
export let AnswerBlock38: string;
export let AnswerBlock39: string;
export let AnswerBlock40: string;
export let AnswerBlock41: string;
export let AnswerBlock42: string;
export let AnswerBlock43: string;
export let AnswerBlock44: string;
export let AnswerBlock45: string;
export let AnswerBlock46: string;
export let AnswerBlock47: string;
export let AnswerBlock48: string;



CodeBlock01 = `{NOME_DA_VARIAVEL} = {VALOR}`
CodeBlock02 = `nome = "Mirai"
idade = 17
linguagem = "Python"`
CodeBlock03 = `nome, idade = "Mirai", 17
nome1 = nome`
CodeBlock04 = `PI = 3.1415
NUMERO_SEIS = 6`
CodeBlock05 = `# Podemos escrever qualquer coisa que ela não será executada
nome = "Mirai"  # Os comentários não precisam estar no inicio da linha, mas perceba, mesmo que coloquemos um codigo aqui, ele será ignorado`
CodeBlock06 = `# nome = "Mirai"`
CodeBlock07 = `print("Olá Mundo")  # Aqui Mostramos a mensagem "Olá Mundo"

mensagem = "Tambem funciona com variaveis"

print(
    mensagem
)  # após temos associado a um valor a variavel \`mensagem\` nós a exibimos ao usuário`
CodeBlock08 = `input()  # ao executar este bloco, o programa irá esperar que o usuário aperte a tecla ENTER para enviar a informação digitada
input(
    "Insira seu nome: "
)  # Ao adicionarmos um texto dentro dos parenteses, este texto será exibido antes do cursor do usuário`
CodeBlock09 = `idade = input("Insira sua idade: ")
print("Sua idade é: ", idade)`
CodeBlock10 = `imprimir = print

imprimir("Olá mundo")`
CodeBlock11 = `nome = "Mirai"
linguagem = "Python"
print(nome, linguagem)`
CodeBlock12 = `apresentacao = "Hi, my name is Mirai, I'm a Developer"  # Note o uso das aspas unicas dentro da string
citacao = 'Pois então ela disse, "Não se dirija mais a mim"...'  # Note o uso das aspas duplas dentro da string

# repare que envolta do texto usamos o mesmo tipo de aspas
print(apresentacao, citacao)`
CodeBlock13 = `apresentacao = "Hi, my name is Mirai, I'm a Developer"
citacao = 'Pois então ela disse, "Não se dirija mais a mim"...'
print(apresentacao, citacao)`
CodeBlock14 = `multi_line1 = """Olá, eu sou um texto de multiplas linhasl, eu fui declarado usando aspas duplas \"\"

eu preservo os espaços

  eba
"""

multi_line2 = """Olá, eu sou um texto de multiplas linhas, eu fui declarado usando aspas unicas \'\'

eu preservo os espaços

  eba
"""

print(multi_line1)
print(multi_line2)`
CodeBlock15 = `nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = (
    f"Olá, meu nome é {nome}, eu tenho {idade} anos e sei programar em {linguagem}"
)
print(apresentacao)`
CodeBlock16 = `nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = f"Olá, meu nome é {nome.upper()}, eu nasci em {2022 - idade} e sei programar em {linguagem}"
print(apresentacao)`
CodeBlock17 = `apresentacao = "Olá, meu nome é {}, eu nasci em {} e sei programar em {}"
nome = "Mirai"
linguagem = "Python"
idade = 17
print(apresentacao.format(nome, 2022 - idade, linguagem))`
CodeBlock18 = `nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = (
    "Olá, meu nome é "
    + nome
    + ", eu tenho "
    + str(idade)
    + " anos e sei programar em "
    + linguagem
)
print(apresentacao)`
CodeBlock19 = `idade = 17
ano_de_nascimento = 2005
ano_atual = 2022
print(type(idade))`
CodeBlock20 = `PI = 3.1415
print(type(PI))`
CodeBlock21 = `print(4 / 2, type(4 / 2))
print(1 / 3, type(1 / 3))`
CodeBlock22 = `print(4 // 2, type(4 // 2))
print(1 // 3, type(1 // 3))`
CodeBlock23 = `print(0.1 + 0.2)`
CodeBlock24 = `print(True and True)
print(True and False)
print(False and True)
print(False and False)`
CodeBlock25 = `print(True or True)
print(True or False)
print(False or True)
print(False or False)`
CodeBlock26 = `print(not False)
print(not True)`
CodeBlock27 = `snan = "NaN"
fnan = float(snan)
print(fnan, type(fnan))

sinf = "inf"
finf = float(sinf)
print(finf, type(finf))`
CodeBlock28 = `raw_string = r"Uma String\\nLiteral com os\tcaracteres de escapagem\\r"
print(raw_string)`
CodeBlock29 = `unicode_string = "Runic F: \\u5792"
print(unicode_string)`
CodeBlock30 = `format_string = f"2 + 2 = {2 + 2}"
print(format_string)`
CodeBlock31 = `raw_format_string = rf"2 * 2 =\\t{2 * 2}"
print(raw_format_string)`
CodeBlock32 = `print("\\tTab\\nNewline")
uString = "Runic Ior: \\u16E1"
print(uString)`
CodeBlock33 = `from string import Template

template_string = Template("Olá meu nome é $nome, e eu estou \${acao}ndo")
print(template_string.substitute(nome="Mirai", acao="Programa"))`
CodeBlock34 = `variavel = "Runic Ior: ᛡ"
conversor_a = f"{variavel!a}"
conversor_r = f"{variavel!r}"
conversor_s = f"{variavel!s}"

print(f"Conversor !a:\t{conversor_a}")
print(f"Conversor !r:\t{conversor_r}")
print(f"Conversor !s:\t{conversor_s}")`
CodeBlock35 = `especificação   ::=  [[preenchimento]alinhamento][sinal][#][0][largura][agrupamento][.precisão][tipo]
preenchimento   ::=  <qualquer caractere>
alinhamento     ::=  "<" | ">" | "=" | "^"
sinal           ::=  "+" | "-" | " "
largura         ::=  digito+
agrupamento     ::=  "_" | ","
precisão        ::=  digito+
tipo            ::=  "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"`
CodeBlock36 = `int_num = 78
float_num = 3.14151617181920212223242526272829
big_int = 1234567890987656543211
string = "essa é uma string"

print(f"int ({int_num})\tb:\t\t{int_num:b}")
print(f"int ({int_num})\tc:\t\t{int_num:c}")
print(f"int ({int_num})\tX:\t\t{int_num:X}")

print(f"big_int\t\t(,):\t\t{big_int:,}")
print(f"big_int\t\t(_):\t\t{big_int:_}")

print(f"float\t\t.2f:\t\t{float_num:.2f}")
print(f"float\t\t2%:\t\t{float_num:.4%}")
print(f"float\t\tg:\t\t{float_num:.5g}")

print(f"string \t\t(esquerda):\t{string:-<32}")
print(f"string \t\t(centro):\t{string:-^32}")
print(f"string \t\t(direita):\t{string:->32}")`
CodeBlock37 = `verdade_universal = 42

print(f"{verdade_universal=}")
print(f"{verdade_universal = }")
print(f"{verdade_universal= }")
print(f"{verdade_universal =}")`
CodeBlock38 = `nome = "Mirai"
idade = 17

texto = "meu nome é %s e eu tenho %+04d anos"

print(texto % (nome, idade))`
CodeBlock39 = `tulipa1 = ("eba", "uma", "tuple")
print(tulipa1, type(tulipa1))`
CodeBlock40 = `tulipa2 = "eba", "mais", "uma", "tuple"
print(tulipa2, type(tulipa2))`
CodeBlock41 = `x, y = 1, 2  # uma tuple com 2 valores
z = 7  # valor que iremos adicionar
tulipa_nova = x, +y, +z
print(tulipa_nova, type(tulipa_nova))`
CodeBlock42 = `amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))`
CodeBlock43 = `amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
print(amigos[0], type(amigos[0]))  # mostraremos o amigo1
print(amigos[2], type(amigos[1]))  # mostraremos o amigo2
print(amigos[1], type(amigos[2]))  # mostraremos o amigo3
print(amigos[-3], type(amigos[-3]))  # mostraremos o amigo1
print(amigos[-2], type(amigos[-2]))  # mostraremos o amigo2
print(amigos[-1], type(amigos[-1]))  # mostraremos o amigo3`
CodeBlock44 = `amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.append("amigo4")
print(amigos, type(amigos))`
CodeBlock45 = `amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.insert(1, "amigo4")  # iremos adicionar o amigo4 na segunda posição
print(amigos, type(amigos))`
CodeBlock46 = `amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.pop()
print(amigos, type(amigos))
amigos.remove("amigo1")
print(amigos, type(amigos))`
CodeBlock47 = `matriz = [
    # X  0  1  2      Y
    [1, 2, 3],  # 0
    [4, 5, 6],  # 1
    [7, 8, 9],  # 2
]
print(matriz, type(matriz))
# Eixos:     Y  X
print(matriz[0][0])
print(matriz[2][1])`
CodeBlock48 = `set_nomes = {"Joaquim", "Mirai", "Maria"}
print(set_nomes)`
CodeBlock49 = `set_nome_pessoas = {"Mirai", "Maria", "Ana", "José", "Joaquim", "Maria"}
print(set_nome_pessoas)`
CodeBlock50 = `estudantes_matematica = {"aluno1", "aluno2", "aluno2", "aluno3", "aluno4", "aluno5"}
estudantes_portugues  = {"aluno6", "aluno2", "aluno3", "aluno7", "aluno8"}

estudantes_matematica.add("aluno9")
print(f"ADD: {estudantes_matematica}")

estudantes_matematica.remove("aluno5")
print(f"REMOVE: {estudantes_matematica}")

diff = estudantes_portugues.difference(estudantes_matematica)
print(f"DIFFERENCE: {diff}")

symdiff = estudantes_portugues.symmetric_difference(estudantes_matematica)
print(f"SYMMETRIC_DIFFERENCE: {symdiff}")

intersec = estudantes_matematica.intersection(estudantes_portugues)
print(f"INTERSECTION: {intersec}")

union = estudantes_matematica.union(estudantes_portugues)
print(f"UNION: {union}")`
CodeBlock51 = `valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {chave1: valor1, chave2: valor2}
print(dicionario, type(dicionario))`
CodeBlock52 = `valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {
\tchave1: valor1,
\tchave2: valor2
}

print(dicionario, type(dicionario))`
CodeBlock53 = `valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {chave1: valor1, chave2: valor2}
print(dicionario[chave1], type(dicionario[chave1]))`
CodeBlock54 = `valor1, valor2, valor3 = "valor1", "valor2", "valor3"
chave1, chave2, chave3 = "chave1", "chave2", "chave3"

dicionario = {chave1: valor1, chave2: valor2}

dicionario[chave3] = valor3
dicionario[chave1] = valor2
print(dicionario[chave3], type(dicionario[chave3]))
print(dicionario[chave1], type(dicionario[chave1]))`
CodeBlock55 = `x = 3
print(x, type(x))
y = str(x)  # converte 3 int em "3" string
print(y, type(y))`







AnswerBlock01 = `Olá Mundo
Tambem funciona com variaveis`
AnswerBlock02 = `Insira seu nome: 'Nome Legal'`
AnswerBlock03 = `Sua idade é:  99`
AnswerBlock04 = `Olá mundo`
AnswerBlock05 = `Mirai Python`
AnswerBlock06 = `Hi, my name is Mirai, I'm a Developer Pois então ela disse, "Não se dirija mais a mim"...`
AnswerBlock07 = `Hi, my name is Mirai, I'm a Developer Pois então ela disse, "Não se dirija mais a mim"...`
AnswerBlock08 = `Olá, eu sou um texto de multiplas linhasl, eu fui declarado usando aspas duplas ""

eu preservo os espaços

  eba

Olá, eu sou um texto de multiplas linhas, eu fui declarado usando aspas unicas ''

eu preservo os espaços

  eba
`
AnswerBlock09 = `Olá, meu nome é Mirai, eu tenho 17 anos e sei programar em Python`
AnswerBlock10 = `Olá, meu nome é MIRAI, eu nasci em 2005 e sei programar em Python`
AnswerBlock11 = `Olá, meu nome é Mirai, eu nasci em 2005 e sei programar em Python`
AnswerBlock12 = `Olá, meu nome é Mirai, eu tenho 17 anos e sei programar em Python`
AnswerBlock13 = `<class 'int'>`
AnswerBlock14 = `<class 'float'>`
AnswerBlock15 = `2.0 <class 'float'>
0.3333333333333333 <class 'float'>`
AnswerBlock16 = `2 <class 'int'>
0 <class 'int'>`
AnswerBlock17 = `0.30000000000000004`
AnswerBlock18 = `True
False
False
False`
AnswerBlock19 = `True
True
True
False`
AnswerBlock20 = `True
False`
AnswerBlock21 = `nan <class 'float'>
inf <class 'float'>`
AnswerBlock22 = `Uma String\\nLiteral com os\tcaracteres de escapagem\\r`
AnswerBlock23 = `Runic F: 垒`
AnswerBlock24 = `2 + 2 = 4`
AnswerBlock25 = `2 * 2 =\\t4`
AnswerBlock26 = `\tTab
Newline
Runic Ior: ᛡ`
AnswerBlock27 = `Olá meu nome é Mirai, e eu estou Programando`
AnswerBlock28 = `Conversor !a:	'Runic Ior: \\u16e1'
Conversor !r:	'Runic Ior: ᛡ'
Conversor !s:	Runic Ior: ᛡ`
AnswerBlock29 = `int (78)	b:		1001110
int (78)	c:		N
int (78)	X:		4E
big_int		(,):		1,234,567,890,987,656,543,211
big_int		(_):		1_234_567_890_987_656_543_211
float		.2f:		3.14
float		2%:		314.1516%
float		g:		3.1415
string 		(esquerda):	essa é uma string---------------
string 		(centro):	-------essa é uma string--------
string 		(direita):	---------------essa é uma string`
AnswerBlock30 = `verdade_universal=42
verdade_universal = 42
verdade_universal= 42
verdade_universal =42`
AnswerBlock31 = `meu nome é Mirai e eu tenho +017 anos`
AnswerBlock32 = `('eba', 'uma', 'tuple') <class 'tuple'>`
AnswerBlock33 = `('eba', 'mais', 'uma', 'tuple') <class 'tuple'>`
AnswerBlock34 = `(1, 2, 7) <class 'tuple'>`
AnswerBlock35 = `['amigo1', 'amigo2', 'amigo3'] <class 'list'>`
AnswerBlock36 = `['amigo1', 'amigo2', 'amigo3'] <class 'list'>
amigo1 <class 'str'>
amigo3 <class 'str'>
amigo2 <class 'str'>
amigo1 <class 'str'>
amigo2 <class 'str'>
amigo3 <class 'str'>`
AnswerBlock37 = `['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo2', 'amigo3', 'amigo4'] <class 'list'>`
AnswerBlock38 = `['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo4', 'amigo2', 'amigo3'] <class 'list'>`
AnswerBlock39 = `['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo2'] <class 'list'>
['amigo2'] <class 'list'>`
AnswerBlock40 = `[[1, 2, 3], [4, 5, 6], [7, 8, 9]] <class 'list'>
1
8`
AnswerBlock41 = `{'Mirai', 'Maria', 'Joaquim'}`
AnswerBlock42 = `{'Maria', 'Mirai', 'José', 'Ana', 'Joaquim'}`
AnswerBlock43 = `ADD:\t\t\t\t\t\t{'aluno1', 'aluno2', 'aluno4', 'aluno3', 'aluno5', 'aluno9'}
REMOVE:\t\t\t\t\t{'aluno1', 'aluno2', 'aluno4', 'aluno3', 'aluno9'}
DIFFERENCE:\t\t\t\t{'aluno7', 'aluno6', 'aluno8'}
SYMMETRIC_DIFFERENCE:\t{'aluno1', 'aluno6', 'aluno4', 'aluno7', 'aluno8', 'aluno9'}
INTERSECTION:\t\t\t{'aluno2', 'aluno3'}
UNION:\t\t\t\t\t{'aluno2', 'aluno4', 'aluno7', 'aluno8', 'aluno1', 'aluno6', 'aluno3', 'aluno9'}`
AnswerBlock44 = `{'chave1': 'valor1', 'chave2': 'valor2'} <class 'dict'>`
AnswerBlock45 = `{'chave1': 'valor1', 'chave2': 'valor2'} <class 'dict'>`
AnswerBlock46 = `valor1 <class 'str'>`
AnswerBlock47 = `valor3 <class 'str'>
valor2 <class 'str'>`
AnswerBlock48 = `3 <class 'int'>
3 <class 'str'>`
