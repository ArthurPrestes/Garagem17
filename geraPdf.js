
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
    /*pdf.line(20, 20, 60, 20) // horizontal line
    pdf.line(100, 20, 100, 60) // vertical line
    pdf.setDrawColor(255, 0, 0) // draw red lines

    pdf.setLineWidth(0.1)
    pdf.line(100, 20, 100, 60) // vertical line
    pdf.line(20, 20, 60, 20) // horizontal line

    pdf.setLineWidth(0.5)
    pdf.line(20, 25, 60, 25)

    pdf.setLineWidth(1)
    pdf.line(20, 30, 60, 30)

    pdf.setLineWidth(1.5)
    pdf.line(20, 35, 60, 35)
    pdf.setLineWidth(0.5)
    pdf.line(105, 20, 105, 60)

    pdf.setLineWidth(1)
    pdf.line(110, 20, 110, 60)

    pdf.setLineWidth(1.5)
    pdf.line(115, 20, 115, 60)*/

    pdf.line(10, 10, 100, 10) // horizontal line pdf.line(espaço pra começar, angulo pra cima,largura,angulo pra baixo)
    pdf.line(10, 30, 100, 30)
    pdf.line(100, 10, 100, 30)// vertical line
    pdf.line(10, 10, 10, 30)
    //pdf.fromHTML('<h2>Oficina Garagem 17</h2>'); fromHTML -> permite que coloque codigo HTML no pdf
    pdf.text("Garagem 17", 10, 15);
    pdf.text("Soluções em pintura automotiva", 10, 20);

    // Adicionar conteúdo ao PDF
    pdf.text("Nome do cliente: " + clientName, 10, 40);
    pdf.text("Placa do carro: " + carPlate, 10, 50);
    pdf.text("Modelo do carro: " + carModel, 10, 60);
    pdf.text("Cor do carro: " + carColor, 10, 70);
    pdf.text("Telefone para contato: " + phone, 10, 80);

    let inputs = document.querySelectorAll(".orcamento");
    let space = 90;
    inputs.forEach(input => {
      let descricao = input.querySelector("#descricao").value;
      let valor = input.querySelector("#valor").value;
            
      itens.push({ descricao, valor });
      pdf.text("Descrição: " + descricao + " valor: " + valor, 10, space);
      space = space + 10;
      //Esvazia os novos campos criados
      descricao = input.querySelector("#descricao").value;
      valor = input.querySelector("#valor").value;
      //alert para testar se as informacoes são carregadas no array
    //alert(`Nome: ${clientName}\nPlaca: ${carPlate}\nModelo: ${carModel}\nCor: ${carColor}\nTelefone: ${phone}\nItens: ${JSON.stringify(itens)}\nspace: ${space}`);
      });
      
    // Salvar o PDF
    pdf.save("Orçamento de "+clientName+" "+carModel+" "+carColor+" "+carPlate+".pdf");
  }