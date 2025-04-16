function nomeCompleto(nomeCompleto) {
    const partesNome = nomeCompleto.trim().split(/\s+/);
  
    if (partesNome.length < 2) {
      console.log("Nome inválido. Por favor, forneça seu nome completo.");
      return;
    }
  
    const nome = partesNome [0]; 
    const sobrenome = partesNome.slice(1).join (" "); 
    
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
  }
  
  function composto(nomeComposto) {
    const partesNome = nomeComposto.trim().split(/\s+/);
  
    if (partesNome.length < 2) {
      console.log("Nome inválido. Por favor, forneça seu nome completo.");
      return;
    }
  
    const nome = partesNome.slice(0, partesNome.length - 1 && 2).join(" "); 
    const sobrenome = partesNome.slice(2).join (" "); 
    
    console.log("Nome Composto:", nome);
    console.log("Sobrenome:", sobrenome);
  }
  
  
  composto("julio cesar paulino");
  nomeCompleto("JULIO CESAR PAULINO");
