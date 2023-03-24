# [SRE] Internship Test

## # Proposal
A pessoa candidata terá que analisar os arquivos de logs do exemplo.com e agrupar os
outputs por paths que responderam com sucesso e falha.
## # Apreciamos:
 *●* Documentação;
 *●* Simplicidade;
 *●* Usabilidade;
 *●* Código Limpo.
## # Pontos bônus:
 *●* Testes;
 *●* Ci
## # tech stack
Recomendamos utilizar as stacks padrões da Quero, porém não há pré-requisito, escolha a
linguagem que se sentir mais confortável 
## # Nível 1
Desenvolva uma solução que vasculhe e agrupe os logs do app exemplo.com por paths e
taxas de sucesso e erro. Os statusCodes entre 200-399 indicam sucesso e os entre
400-599 indicam erros. Os logs seguem o seguinte formato:

```

{"env":"XXX","patch":"XXX","method":"XXX","duration":"XXX","statuscode":XXX,"statusmessage":"XXX","host":"XXX","level":"XXX","message":"XXX","timestamp":"XXX"}

```

O output deve ser um arquivo json seguindo o seguinte padrão:

```

[
  {
    "patch":"/some/patch",
    "errocount":0,
    "successcount":0
  },
  {
    "patch":"/some/patch",
    "errorcount":0,
    "successcount":0
  }
 ...
]
```

A entrega deve ser feita via git, instruções para o setup e execução da aplicação devem estar
contidas no README do repositório.
## # Nível 2
 *●* Containerize sua solução (pontos bônus quanto mais otimizado o container for 😉);
 *●* Atualize a sessão de setup e de execução do README para explicar como executar a
solução containerizada, salvando o arquivo de output em
~/sre-intern-test/output.json.
