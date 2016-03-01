$("#form-let-me").submit(function(e){
      e.preventDefault();

      var form = $(this).serialize();
      var elm = $(this)
   
      if( $(this).find("input[name=sku]").val() == "" ){
        $(".msg-error").text("por favor escolha um tamanho");
      } else {
        $.post("/lista_de_espera", form, function(data) {
          console.log(data);
        }, "json")
        .done(function() {
          console.log("ok!")
          console.log(elm.find('input[name=email]').val())
          var a = {
              key: 'budhakherhi-avise-me-quando-chegar'
            , reply_to: elm.find('input[name=email]').val()
            , imagemvariante: elm.find('input[name=imagemvariante]').val()
            , referencia: elm.find('input[name=referencia]').val()
            , sku: elm.find('input[name=sku]').val()
            , preco: elm.find('input[name=preco]').val() 
            , email: elm.find('input[name=email]').val() 
          }

          $.post("/webform", a, function(data) {
            console.log('Webform'+ data);
          }, "json")
          .done(function() {
             console.log("Webform ok!")
          })
        })
        .fail(function() {
          console.log("failed..");
        })  
      }
  });
