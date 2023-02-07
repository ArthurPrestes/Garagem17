
//script responsavel por criar o pdf
function generatePDF() {
    // Recuperar dados dos inputs do formulário
    let clientName = document.getElementById("nome-cliente").value;
    let carPlate = document.getElementById("placa-carro").value;
    let carModel = document.getElementById("modelo-carro").value;
    let carColor = document.getElementById("cor-carro").value;
    let phone = document.getElementById("telefone").value;
    let itens = [];
    // Instanciar objeto jsPDF
    var pdf = new jsPDF();
    
    //cria o cabeçario do PDF
    pdf.line(10, 10, 100, 10) // horizontal line pdf.line(espaço pra começar, angulo pra cima,largura,angulo pra baixo)
    pdf.line(10, 30, 100, 30)
    pdf.line(100, 10, 100, 30)// vertical line
    pdf.line(10, 10, 10, 30)
    //pdf.fromHTML('<h2>Oficina Garagem 17</h2>'); fromHTML -> permite que coloque codigo HTML no pdf
    pdf.setFontSize(20);
    pdf.text("Garagem 17", 15, 20);
    pdf.setFontSize(12);
    pdf.text("Soluções em pintura automotiva", 15, 28);
    pdf.text("Orçamento", 105, 20);

    // Adicionar conteúdo ao PDF
    pdf.text("Nome do cliente: " + clientName, 15, 40);
    pdf.text("Placa do carro: " + carPlate, 110, 40);
    pdf.text("Modelo do carro: " + carModel, 15, 50);
    pdf.text("Cor do carro: " + carColor, 110, 50);
    pdf.text("Telefone para contato: " + phone, 15, 60);

    let inputs = document.querySelectorAll(".orcamento");
    let space = 80;

    //montagem do cabeçario da tabela de itens
      pdf.line(10, 63, 200, 63)
      pdf.line(10, 73, 200, 73)
      //linhas valor
      pdf.line(10, 63, 10, 73)
      pdf.line(145, 63, 145, 73)
      pdf.line(200, 63, 200, 73)
      
      pdf.text("Item:",15 ,70);
      pdf.text("valor:",150 ,70);

    inputs.forEach(input => {
      let descricao = input.querySelector("#descricao").value;
      let valor = input.querySelector("#valor").value;
            
      itens.push({ descricao, valor });
      pdf.text(descricao, 15, space);
      pdf.text(valor, 150, space);
      let começaLinha =space -10;
      let terminaLinha = space;
      pdf.line(10, começaLinha, 10, terminaLinha)
      pdf.line(145, começaLinha, 145, terminaLinha)
      pdf.line(200, começaLinha, 200, terminaLinha)
            
      space = space + 10;

      //Esvazia os novos campos criados
      descricao = input.querySelector("#descricao").value;
      valor = input.querySelector("#valor").value;
    });
    //alert(space);
    //Monta as linhas de baixo da tabela
    pdf.line(10, space -10, 10, space)
    pdf.line(145, space -10, 145, space)
    pdf.line(200, space -10, 200, space)
    pdf.line(10, space, 200, space)
    //campo de informações do orçamento
    pdf.text("Obrigado por fazer negócio conosco!",20,230)
    pdf.text("CNPJ 230301000001/66",15,240)
    pdf.text("Rua Edmundo schowschow, 425", 15, 245)
    pdf.text("Fone Vivo (51) 9 95499811", 15, 250)
      
    // Salvar o PDF
    pdf.save("Orçamento de "+clientName+" "+carModel+" "+carColor+" "+carPlate+".pdf");
  }