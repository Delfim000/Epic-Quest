var energiaInicial = 40;
var energia = 0;
var karmaInicial = 0;
var karma = 0;
var cavalo = 1;
var morreuEsqueleto =
  "''Você para por um momento para tentar recuperar seu fôlego, até que percebe que a última saraivada de flechas não foi evitada por completo. Uma das flechas te acertou na barriga e do ferimento está jorrando um sangue grosso e escuro. Você se ajoelha no chão e sente sua visão falhar. A escuridão parece te envolver, até que você perde suas forças e cai no chão. Morto.''";
var escudo = 0;
var fogoFrio = 0;
var damaNoite = 0;
var final = 0;
document.getElementById("eGuerreiroA01").style.display = "block";
document.getElementById("eGuerreiroB01").style.display = "block";
document.getElementById("eGuerreiroC01").style.display = "block";

function eGuerreiroA01() {
  energia = energiaInicial;
  karma = karmaInicial + 5;
  document.getElementById("eGuerreiroA01").className = "buttonoff";
  document.getElementById("eGuerreiroA01").disabled = true;
  document.getElementById("eGuerreiroB01").className = "buttonoff";
  document.getElementById("eGuerreiroB01").disabled = true;
  document.getElementById("eGuerreiroC01").className = "buttonoff";
  document.getElementById("eGuerreiroC01").disabled = true;
  resultadoPrimeiraEscolha.innerHTML =
    "<div>" +
    "<p>- A Luz tem um novo campeão! - a luz se intensifica e você se sente preenchido pelo seu poder divino. - Receba minha benção e cumpra seu destino!</p><p>''Você então acorda do seu sonho, invigorado e disposto. Não há muito tempo. Você pega o pouco de suprimentos de viagem que consegue, veste sua armadura, põe sua espada longa na cintura e seu escudo nas suas costas. O símbolo do leão ruge em sua superfície e ele te dá mais um pouco de coragem para enfrentar os perigos da sua próxima jornada.''</p>";
  document.getElementById("mudarPagina01").style.display = "block";
}

function eGuerreiroB01() {
  energia = energiaInicial;
  document.getElementById("eGuerreiroA01").className = "buttonoff";
  document.getElementById("eGuerreiroA01").disabled = true;
  document.getElementById("eGuerreiroB01").className = "buttonoff";
  document.getElementById("eGuerreiroB01").disabled = true;
  document.getElementById("eGuerreiroC01").className = "buttonoff";
  document.getElementById("eGuerreiroC01").disabled = true;
  resultadoPrimeiraEscolha.innerHTML =
    "<div>" +
    "<p>- Vejo que está disposto a cumprir seu papel na roda do destino - a luz parece satisfeita e continua. - Vá e proteja o seu povo, nobre guerreiro.</p><p>''Você desperta de seu sonho, se levanta da sua cama e vê o nascer do sol por detrás das Montanhas de Daril. É lá que seu destino o aguarda.''</p>";
  document.getElementById("mudarPagina01").style.display = "block";
}

function eGuerreiroC01() {
  energia = energiaInicial - 5;
  karma = karmaInicial - 5;
  document.getElementById("eGuerreiroA01").className = "buttonoff";
  document.getElementById("eGuerreiroA01").disabled = true;
  document.getElementById("eGuerreiroB01").className = "buttonoff";
  document.getElementById("eGuerreiroB01").disabled = true;
  document.getElementById("eGuerreiroC01").className = "buttonoff";
  document.getElementById("eGuerreiroC01").disabled = true;
  resultadoPrimeiraEscolha.innerHTML =
    "<div>" +
    "<p>- Negar meu aviso será a sua ruína! - a luz dessa vez brada com uma voz trovejante e desaparece.</p><p>''Você acorda de seu sonho assustado e considera que é melhor não ignorar tal aviso e partir para as terras desoladas.''</p>";
  document.getElementById("mudarPagina01").style.display = "block";
}

function mudarPagina01() {
  document.getElementById("mudarPagina01").className = "buttonoff";
  document.getElementById("mudarPagina01").disabled = true;
  document.getElementById("segundoTexto").style.display = "block";
  document.getElementById("eGuerreiroA02").style.display = "block";
  document.getElementById("eGuerreiroB02").style.display = "block";
  console.log(energia, karma);
}
function eGuerreiroA02() {
  energia = energia - 10;
  karma = karma + 5;
  document.getElementById("eGuerreiroA02").className = "buttonoff";
  document.getElementById("eGuerreiroA02").disabled = true;
  document.getElementById("eGuerreiroB02").className = "buttonoff";
  document.getElementById("eGuerreiroB02").disabled = true;
  resultadoSegundaEscolha.innerHTML =
    "<div>" +
    "<p>''Sua espada sai da bainha com velocidade e você guia seu cavalo em direção ao chamado de socorro. Ao chegar lá, uma mãe e uma filha estão sendo atacadas por dois goblins usando armas improvisadas. Você não tem dificuldade para eliminar as duas criaturas e logo consegue colocar mãe e filha em segurança.''</p><p>''Ainda assim, a ameaça está longe de ter sido resolvida. Outros goblins aparecem usando uma máquina de guerra com lanças e outras lâminas apontadas em sua direção, sendo empurradas por três goblins. Um quarto goblin aponta pra frente e grita uma palavra de comando, o que faz com que os outros três goblins empurrem a máquina para te atropelar.''</p><p>''Uma das lâminas consegue te ferir enquanto eles passam, mas um ataque rápido da sua espada faz a cabeça do goblin comandante voar. Os outros três goblins simplesmente perdem a coragem de lutar e abandonam o combate. Visto que seu líder foi derrotado, as outras forças também perdem a moral e são afastadas pelos aldeões inspirados na sua liderança e o vilarejo está salvo!''</p>";
  document.getElementById("mudarPagina02").style.display = "block";
}
function eGuerreiroB02() {
  karma = karma - 5;
  document.getElementById("eGuerreiroA02").className = "buttonoff";
  document.getElementById("eGuerreiroA02").disabled = true;
  document.getElementById("eGuerreiroB02").className = "buttonoff";
  document.getElementById("eGuerreiroB02").disabled = true;
  resultadoSegundaEscolha.innerHTML =
    "<div>" +
    "<p>''Você decide se manter firme e cavalgar pelas ruas do vilarejo focado no seu objetivo, tentando ignorar os gritos de socorro das vítimas dos goblins. Os gritos podem ser ouvidos mesmo depois de você deixar o vilarejo, mas você acredita que nunca vai deixar de ouvir esses chamados até o fim dos seus dias...''</p>";
  document.getElementById("mudarPagina02").style.display = "block";
}

function mudarPagina02() {
  document.getElementById("mudarPagina02").className = "buttonoff";
  document.getElementById("mudarPagina02").disabled = true;
  document.getElementById("terceiroTexto").style.display = "block";
  document.getElementById("eGuerreiroA03").style.display = "block";
  document.getElementById("eGuerreiroB03").style.display = "block";
  if (karma === -10) {
    document.getElementById("eGuerreiroC03").style.display = "block";
  }
  console.log(energia, karma);
}

function eGuerreiroA03() {
  energia = energia - 10;
  karma = karma + 5;
  document.getElementById("eGuerreiroA03").className = "buttonoff";
  document.getElementById("eGuerreiroA03").disabled = true;
  document.getElementById("eGuerreiroB03").className = "buttonoff";
  document.getElementById("eGuerreiroB03").disabled = true;
  if (karma === -10) {
    document.getElementById("eGuerreiroC03").className = "buttonoff";
    document.getElementById("eGuerreiroC03").disabled = true;
  }
  resultadoTerceiraEscolha.innerHTML =
    "<div>" +
    "<p>''Os gnolls rosnam enquando você desce do cavalo e seguram suas lanças com maior firmeza quando você empunha suas armas em desafio. O combate é feroz e seis contra um parece ser uma desvantagem grande demais para o guerreiro, mas ainda assim você desce sua espada com precisão e ergue seu escudo com destreza, eliminando um gnoll seguido do outro.''</p><p>''Quando o terceiro gnoll é abatido, um quarto avança e da uma estocada precisa com a lança na direção do seu peito, mas o ataque milagrosamente erra o seu coração, ferindo seu peito e passando por baixo do seu braço esquerdo. O quarto gnoll cai diante do seu ataque e os outros dois acham melhor largar suas armas e correr para o rio, buscando a segurança das suas águas.''</p><p>''Mesmo ferido você sai vitorioso rumo as Terras Desoladas em seu cavalo.''</p>";
  document.getElementById("mudarPagina03").style.display = "block";
}

function eGuerreiroB03() {
  energia = energia - 5;
  cavalo = 0;
  document.getElementById("eGuerreiroA03").className = "buttonoff";
  document.getElementById("eGuerreiroA03").disabled = true;
  document.getElementById("eGuerreiroB03").className = "buttonoff";
  document.getElementById("eGuerreiroB03").disabled = true;
  if (karma === -10) {
    document.getElementById("eGuerreiroC03").className = "buttonoff";
    document.getElementById("eGuerreiroC03").disabled = true;
  }
  resultadoTerceiraEscolha.innerHTML =
    "<div>" +
    "<p>''Seu cavalo reluta em ser deixado para trás. Os gnolls dão risada do desafio do animal, mas dão mais risada quando você passa por eles, seguindo a pé.''</p><p>- O bicho tem mais coragem que seu dono! - diz um dos gnolls entre risos.</p><p>- Até breve, pangaré! - grita outro gnoll, fazendo com que seus companheiros deem ainda mais risadas.</p><p>''Você nem olha para trás, sentindo um misto de vergonha e determinação enquanto avança rumo as Terras Desoladas.''</p>";
  document.getElementById("mudarPagina03").style.display = "block";
}

function eGuerreiroC03() {
  karma = karma - 5;
  document.getElementById("eGuerreiroA03").className = "buttonoff";
  document.getElementById("eGuerreiroA03").disabled = true;
  document.getElementById("eGuerreiroB03").className = "buttonoff";
  document.getElementById("eGuerreiroB03").disabled = true;
  document.getElementById("eGuerreiroC03").className = "buttonoff";
  document.getElementById("eGuerreiroC03").disabled = true;
  resultadoTerceiraEscolha.innerHTML =
    "<div>" +
    "<p>- É verdade, chefe, estou vendo fumaça vindo daquela direção - diz um dos gnolls.</p><p>- Tem razão! - diz outro. - Já posso sentir o gosto de carne fresca!</p><p>- Muito bem, seus cães sujos, vamos atrás de alguns espólios! - diz o líder d bando.</p><p>''As criaturas seguem o seu conselho e liberam a ponte. Você sente sua alma ficar ainda mais manchada depois desse ato.</p>";
  document.getElementById("mudarPagina03").style.display = "block";
}

function mudarPagina03() {
  document.getElementById("mudarPagina03").className = "buttonoff";
  document.getElementById("mudarPagina03").disabled = true;
  if (cavalo === 1) {
    cavaloTexto04.innerHTML =
      "<p>''Não demora muito tempo para que se torne impossível cavalgar por aquela estrada esburacada e você decide parar para acampar.''</p>";
  } else {
    cavaloTexto04.innerHTML =
      "<p>''Andar naquele lugar desolado a noie não parece uma boa ideia, mesmo que com uma tocha, então o ideal é acender uma fogueira e esperar a noite passar.''</p>";
  }
  if (karma === 15) {
    document.getElementById("eGuerreiroA04").style.display = "block";
  }
  document.getElementById("quartoTexto").style.display = "block";
  document.getElementById("eGuerreiroB04").style.display = "block";
  document.getElementById("eGuerreiroC04").style.display = "block";
  console.log(energia, karma);
}

function eGuerreiroA04() {
  document.getElementById("eGuerreiroA04").className = "buttonoff";
  document.getElementById("eGuerreiroA04").disabled = true;
  document.getElementById("eGuerreiroB04").className = "buttonoff";
  document.getElementById("eGuerreiroB04").disabled = true;
  document.getElementById("eGuerreiroC04").className = "buttonoff";
  document.getElementById("eGuerreiroC04").disabled = true;
  resultadoQuartaEscolha.innerHTML =
    "<div>" +
    "<p>''Você ergue sua espada para lutar contra os esqueletos e ela brilha como a luz do sol por um momento. As criaturas desmortas fogem diante do seu poder e na sua mente você pode ouvir aquela voz familiar que você só tinha ouvido em seu sonho.''</p><p>- Meu Campeão, use minha lâmina divina quando estiver diante de seres desmortos e eu lhes trarei a ruína - diz a voz.</p>";
  document.getElementById("mudarPagina04").style.display = "block";
}

function eGuerreiroB04() {
  energia = energia - 8;
  if (energia > 0) {
    morreuEsqueleto = "";
  }
  document.getElementById("eGuerreiroB04").className = "buttonoff";
  document.getElementById("eGuerreiroB04").disabled = true;
  document.getElementById("eGuerreiroC04").className = "buttonoff";
  document.getElementById("eGuerreiroC04").disabled = true;
  resultadoQuartaEscolha.innerHTML =
    "<div>" +
    "<p>''O primeiro tiro disparado acaba resvalando em seu escudo, mas o segundo tiro acaba acertando de raspão o seu ombro, abrindo um corte superficial. Para criaturas mortas, esses esqueletos conseguem ser precisos.''</p><p>''Ainda assim, eles não estão a sua altura. Sua lâmina corta o ar e se choca contra a lâmina enferrujada do primeiro esqueleto, que é rompida, e em seguida o corte atinge o peito do morto, estraçalhando seu corpo.''</p><p>''Os arqueiros disparam mais uma vez, mas dessa vez você é mais rápido e consegue bloquear as flechas com seu escudo. Sua espada novamente corta o ar e em um corte lateral você consegue atingir os dois esqueletos, que caem desmontados no chão.''</p>" +
    morreuEsqueleto;

  document.getElementById("mudarPagina04").style.display = "block";
}

function eGuerreiroC04() {
  energia = energia - 15;
  if (energia > 0) {
    morreuEsqueleto = "";
  }
  document.getElementById("eGuerreiroB04").className = "buttonoff";
  document.getElementById("eGuerreiroB04").disabled = true;
  document.getElementById("eGuerreiroC04").className = "buttonoff";
  document.getElementById("eGuerreiroC04").disabled = true;
  resultadoQuartaEscolha.innerHTML =
    "<div>" +
    "<p>''Você ergue seus braços na tentativa de fazer com que as criaturas não o reconheçam com uma ameaça, mas isso não adiantou. Duas flechas voam dos arcos dos esqueletos e por pouco não se cravam de maneira fatal no seu peito. Você só tem tempo de rolar no chão e pegar sua espada para contra atacar.''</p><p>''O primeiro esqueleto te ataca com sua lâmina enferrujada, mas você consegue aparar seu golpe sem dificuldade. O problema está no segundo disparo de flechas, onde uma delas consegue se cravar na coxa esquerda.''</p><p>''Você tenta ignorar a dor e atinge o primeiro esqueleto com força com o pomo da sua espada, estraçalhando seu crânio. Com um impulso com sua perna boa você faz um novo rolamento e sua lâmina consegue cortar as pernas de um do arqueiros, que cai se desmontando no chão. Você aproveita que ele está caído e separa seu crânio de seu corpo morto com sua espada.''</p><p>''O último esqueleto dispara mais uma vez, atingindo suas costas, mas a ponta cega da sua flecha não consegue ultrapassar a defesa da sua armadura. Ainda assim, é como se tivessem martelado uma de suas costelas.''</p><p>''Por fim você se ergue se apoiando na sua perna direita e ataca o último esqueleto com um corte diagonal de baixo para cima, eliminando de vez a criatura.''</p>" +
    morreuEsqueleto;
  document.getElementById("mudarPagina04").style.display = "block";
}

function mudarPagina04() {
  document.getElementById("mudarPagina04").className = "buttonoff";
  document.getElementById("mudarPagina04").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    energia = energia + 20;
    if (cavalo === 1) {
      document.getElementById("eGuerreiroC05").style.display = "block";
      cavaloTexto05.innerHTML =
        "<p>''Mesmo com a estrada ruim, seu cavalo não teve dificuldade em avançar pela estrada desgastada e logo você chegou até as ruínas de uma cidade próxima das Montanhas de Daril.''</p>";
    } else {
      energia = energia - 5;
      document.getElementById("eGuerreiroD05").style.display = "block";
      cavaloTexto05.innerHTML =
        "<p>''Foi difícil fazer essa parte do percurso a pé porque o dia estava quente e o peso que você carregava era um pouco desgastante, o que acabou te deixando mais cansado. Ainda assim, em poucas horas você chegou até as ruínas de uma cidade próxima das Montanhas de Daril.''</p>";
    }
    document.getElementById("quintoTexto").style.display = "block";
    document.getElementById("eGuerreiroB05").style.display = "block";
    if (karma === 15) {
      document.getElementById("eGuerreiroA05").style.display = "block";
    }
    if (karma === 15) {
      document.getElementById("eGuerreiroB05").style.display = "block";
    }
  }
  console.log(energia, karma);
}

function eGuerreiroA05() {
  energia = energia - 20;
  if (karma === 15) {
    document.getElementById("eGuerreiroA05").className = "buttonoff";
    document.getElementById("eGuerreiroA05").disabled = true;
  }
  document.getElementById("eGuerreiroB05").className = "buttonoff";
  document.getElementById("eGuerreiroB05").disabled = true;
  if (cavalo === 1) {
    document.getElementById("eGuerreiroC05").className = "buttonoff";
    document.getElementById("eGuerreiroC05").disabled = true;
  } else {
    document.getElementById("eGuerreiroD05").className = "buttonoff";
    document.getElementById("eGuerreiroD05").disabled = true;
  }
  resultadoQuintaEscolha.innerHTML =
    "<div>" +
    "<p>''O poder da luz atende o seu chamado e sua espada novamente emite um brilho divino. O ogro olha para aquela luz e não se sente intimidado, ele bate sua clava no chão, como sinal de desafio, e então avança contra você, fazendo a clava atravessar o ar e uma parede quebrada em seu caminho.''</p><p>''Você só tem tempo de erguer seu escudo e tentar aguentar aquele golpe titânico, mas apancada em seu escudo é tão forte que você é arremessado alguns metros para trás, se chocando contra uma parede das outras ruínas.''</p><p>''Com a pancada você sentiu que todo o ar dos seus pulmões foi expulso de uma vez e, ao tentar se apoiar na parede para se manter de pé, você não consegue impedir uma golfada de sangue de sair da sua boca. Pelo visto o golpe também quebrou algumas costelas. Ainda assim, você se mantém de pé, sem saber se é graças a sua determinação ou pelo poder da luz.''</p><p>''Você ergue sua espada brilhante e avança contra o ogro. O monstro ergue novamente sua clava de madeira e desfere um ataque que desce em diagonal na direção da sua cabeça, mas dessa vez você está preparado para o golpe. O ataque é simples demais e você consegue usar seu escudo para aparar a clava e mudar a sua trajetória, expondo o flanco do monstro.''</p><p>''Você da uma estocada com sua espada no peito do ogro e perfura o coração do monstro com precisão. Ele emite um grunhido de dor, largando sua pesada clava no chão para agarrar o próprio peito, tentando alcançar a fonte da sua dor. Você torce a espada e ele emite um último protesto antes de finalmente seu corpo tombar no chão sem vida.''</p><p>''Ainda assim, as coisas não estão boas para você. Você cospe outra golfada de sangue e sente sua visão ficando turva. Você se ajoela no chão, respirando com dificuldade e sente os efeitos dos poderes da Luz deixando seu corpo aos poucos, até que você finalmente cai no chão.''</p><p>";
  document.getElementById("mudarPagina05").style.display = "block";
}
function eGuerreiroB05() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA05").className = "buttonoff";
    document.getElementById("eGuerreiroA05").disabled = true;
  }
  document.getElementById("eGuerreiroB05").className = "buttonoff";
  document.getElementById("eGuerreiroB05").disabled = true;
  if (cavalo === 1) {
    document.getElementById("eGuerreiroC05").className = "buttonoff";
    document.getElementById("eGuerreiroC05").disabled = true;
  } else {
    document.getElementById("eGuerreiroD05").className = "buttonoff";
    document.getElementById("eGuerreiroD05").disabled = true;
  }
  resultadoQuintaEscolha.innerHTML =
    "<div>" +
    "<p>''Você ergue seu escudo e gira sua espada no ar, se preparando para o ataque eminente. O ogro observa seu movimento e para por um instante. Ele bate sua clava no chão e emite um rugido que te faz estremecer. Em seguida ele pega um grande pedaço de entulho do chão e arremessa contra você, mas o pedaço de alvenaria se choca contra seu escudo sem causar danos.''</p><p>''O problema é que o ogro usou a oportunidade para se aproximar, erguendo sua clava e fazendo um ataque de cima para baixo que você novamente defende com seu escudo. O impacto do golpe titânico faz seu braço emitir um estalo, som que é repetido pelo seu ombro ombro, seu pescoço e pelos seus joelhos, te deixando atordoado.''</p><p>''O segundo ataque do monstro é furioso e é feito novamente de cima pra baixo, não te dando chance de reação. Dessa vez ele quebra a parte de cima do seu escudo e atinge a sua cabeça, fazendo você se ajoelhar no chão com a pancada.''</p><p>''Você nem sente o terceiro impacto te atingir, um novo golpe de cima pra baixo que joga seu corpo pro chão, quebrando mais alguns ossos e te fazendo perder a consciencia.''</p><p>''O silêncio vem somente após o quarto golpe, mas você não está mais vivo para sentir nada. Seu corpo jaz quebrado no chão. Morto.''</p>";
  document.getElementById("mudarPagina05").style.display = "block";
}
function eGuerreiroC05() {
  energia = energia - 5;
  if (karma === 15) {
    document.getElementById("eGuerreiroA05").className = "buttonoff";
    document.getElementById("eGuerreiroA05").disabled = true;
  }
  document.getElementById("eGuerreiroB05").className = "buttonoff";
  document.getElementById("eGuerreiroB05").disabled = true;
  if (cavalo === 1) {
    document.getElementById("eGuerreiroC05").className = "buttonoff";
    document.getElementById("eGuerreiroC05").disabled = true;
  } else {
    document.getElementById("eGuerreiroD05").className = "buttonoff";
    document.getElementById("eGuerreiroD05").disabled = true;
  }
  resultadoQuintaEscolha.innerHTML =
    "<div>" +
    "<p>''Você puxa as rédeas do seu cavalo e dá o comando para que ele corra dali. Realmente não vale a pena correr riscos enfrentando uma criatura dessas a troco de nada.''</p><p>''Você até escuta o barulho de uma pedra se chocando contra uma das paredes arruinadas enquanto foge, mas você nem se vira pra ver o que aconteceu. O importante é sair dali com vida e seguir com sua missão.''</p><p>''Seu cavalo atravessa as ruas da cidade abandonada as pressas e você mal tem tempo de escolher qual direção tomar por conta de tal urgência. O que você não esperava era virar uma esquina e dar de cara com outro ogro.''</p><p>''A criatura parece ter sido atraída pelo barulho do outro ogro e ela ruge quando te vê, te forçando a empinar o cavalo e mudar novamente a direção do seu galope.''</p><p>''A sua urgência é tanta que você não nota um pavimento rachado a sua frente e, quando atravessa essa rua com seu cavalo, o pavimento se quebra e você e sua montaria caem lá dentro, desaparecendo na escuridão.''</p>";
  document.getElementById("mudarPagina05").style.display = "block";
}
function eGuerreiroD05() {
  energia = energia - 15;
  if (karma === 15) {
    document.getElementById("eGuerreiroA05").className = "buttonoff";
    document.getElementById("eGuerreiroA05").disabled = true;
  }
  document.getElementById("eGuerreiroB05").className = "buttonoff";
  document.getElementById("eGuerreiroB05").disabled = true;
  if (cavalo === 1) {
    document.getElementById("eGuerreiroC05").className = "buttonoff";
    document.getElementById("eGuerreiroC05").disabled = true;
  } else {
    document.getElementById("eGuerreiroD05").className = "buttonoff";
    document.getElementById("eGuerreiroD05").disabled = true;
  }
  resultadoQuintaEscolha.innerHTML =
    "<div>" +
    "<p>''Por um momento a criatura se surpreende coma sua reação de sair dali correndo, mas ela logo se enfurece, agarra um pedaço grande de entulho e atira na sua direção. O entulho explode em pequenos pedaços ao se chocar próximo de você com uma parede em ruínas.''</p><p>''Ao virar uma esquina você ainda pode ouvir a criatura protestar com um rugido diante da refeição que acabou de lhe escapar, mas você logo consegue ouvir seus passos pesados vindo na sua direção.''</p><p>''O que você não esperava é que um outro ogro ia surgir na sua frente, atraído pelo barulho feito pelo primeiro ogro. Sem ter tempo de reação, você é agarrado pela mão enorme do segundo ogro e é erguido até a altura do seus olhos, vendo que ele sorri diante da refeição que acabou de aparecer.''</p><p>''O que o segundo ogro não estava esperando era receber um golpe de clava do primeiro ogro. O impacto te arremessou pro chão e jogou o segundo ogro para o lado, fazendo ele se chocar contra uma parede. As duas criaturas imensas começaram a lutar na sua frente e você aproveitou essa oportunidade para fugir.''</p><p>''O que você não esperava era passar por um pavimento rachado que acabou se quebrando quando você passou por ele. Você ainda tentou se agarrar na borda do buraco, mas você só conseguiu puxar mais pedras para junto de você para dentro da escuridão do buraco.''</p>";
  document.getElementById("mudarPagina05").style.display = "block";
}

function mudarPagina05() {
  document.getElementById("mudarPagina05").className = "buttonoff";
  document.getElementById("mudarPagina05").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    if (cavalo === 1) {
      cavalo = 0;
      document.getElementById("cavaloTexto06").style.display = "block";
      cavaloTexto06.innerHTML =
        "<div>" +
        "<p>''Ao seu lado está a sua fiel montaria. Você não chegou a dar-lhe um nome, ele foi apenas o primeiro cavalo que atendeu o seu chamado no estábulo. Ainda assim, você não consegue esconder a sua tristeza quando vê seu companheiro morto ao seu lado por resultado da queda.''</p>";
    } else {
      document.getElementById("cavaloTexto06").disabled = true;
    }
    document.getElementById("sextoTexto").style.display = "block";
    if (karma === 15) {
      document.getElementById("eGuerreiroA06").style.display = "block";
      document.getElementById("bomKarma06").style.display = "block";
      bomKarma06.innerHTML =
        "<div>" +
        "<p>''Você ergue sua espada e invoca a luz divina. Ela responde e sua lâmina brilha como se fosse uma tocha emitindo uma luz branca que te ajuda a iluminar o lugar, e seu reflexo luminoso é refletido na superfície de um pequeno lago com alguns vagalumes uns 10 metros para o norte de onde você caiu.''</p>";
    }
    if (karma === -15) {
      document.getElementById("eGuerreiroD06").style.display = "block";
      document.getElementById("ruimKarma06").style.display = "block";
      ruimKarma06.innerHTML =
        "<div>" +
        "<p>''Mas, o que mais te chama a atenção é o caminho sul. Ele parece seguir mais fundo na caverna e na escuridão. Vindo dele você tem certeza que consegue ouvir uma canção, uma música que é muito suave e sedutora aos seus ouvidos.''</p>";
    }
    document.getElementById("eGuerreiroB06").style.display = "block";
    document.getElementById("eGuerreiroC06").style.display = "block";
    console.log(energia, karma);
  }
}

function eGuerreiroA06() {
  energia = energia + 20;
  if (karma === 15) {
    document.getElementById("eGuerreiroA06").className = "buttonoff";
    document.getElementById("eGuerreiroA06").disabled = true;
  }
  document.getElementById("eGuerreiroB06").className = "buttonoff";
  document.getElementById("eGuerreiroB06").disabled = true;
  document.getElementById("eGuerreiroC06").className = "buttonoff";
  document.getElementById("eGuerreiroC06").disabled = true;
  if (karma === -15) {
    document.getElementById("eGuerreiroD06").className = "buttonoff";
    document.getElementById("eGuerreiroD06").disabled = true;
  }
  resultadoSextaEscolha.innerHTML =
    "<div>" +
    "<p>''Você segue o caminho até o pequeno lago com dificuldade. Sua respiração está difícil por conta de várias costelas quebradas, mas aos poucos sua atenção é levada a reparar nos vários cogumelos bio luminescentes que ladeiam o caminho até o lago, formando uma paisagem sobrenatural.''</p><p>''O lago subterrâneo deve ter uns 30 metros de diâmetro e quando você se aproxima, iluminando a sua superfície, a luz da sua espada parece atrair os vagalumes até você.''</p><p>''Olhando de perto você vê que as pequenas luzes não são vagalumes, mas sim fadas. Elas rodeiam seu corpo e tocam as suas feridas, o que faz com que você se sinta melhor.''</p><p>''Cansado, você se ajoelha na margem e bebe um pouco da água do lago. Você sente parte da sua energia voltando e olha para as fadas. Elas conseguem sentir a sua gratidão e sorriem pra você, girando a sua volta uma última vez para então se dispensarem pela caverna.''</p><p>''Agora que você se sente melhor, é hora de voltar a realidade. Hora de continuar a sua missão.''</p>";
  document.getElementById("mudarPagina06").style.display = "block";
}
function eGuerreiroB06() {
  energia = energia + 10;
  escudo = 1;
  if (karma === 15) {
    document.getElementById("eGuerreiroA06").className = "buttonoff";
    document.getElementById("eGuerreiroA06").disabled = true;
  }
  document.getElementById("eGuerreiroB06").className = "buttonoff";
  document.getElementById("eGuerreiroB06").disabled = true;
  document.getElementById("eGuerreiroC06").className = "buttonoff";
  document.getElementById("eGuerreiroC06").disabled = true;
  if (karma === -15) {
    document.getElementById("eGuerreiroD06").className = "buttonoff";
    document.getElementById("eGuerreiroD06").disabled = true;
  }
  resultadoSextaEscolha.innerHTML =
    "<div>" +
    "<p>''Você segue até a cripta em busca de um lugar para descansar e fazer alguns curativos nas suas feridas. Suas provações tem sido árduas, mas seu corpo está aguentando. Ao erguer seus olhos para a entrada da cripta, algo te chama a atenção.''</p><p>''Existe uma inscrição na entrada dizendo que aquele é o local de repouso de um antigo cavaleiro. No lugar do nome do cavaleiro estão apenas as suas iniciais, H.H.H.''</p><p>''Ao entrar na cripta você vê o túmulo de pedra do cavaleiro que tem engastado a sua imagem usando uma lançanas costas e um escudo a frente do corpo. Exceto que o escudo não é parte do relevo na pedra, mas sim feito de metal.''</p><p>''Você se sente compelido a tocar no escudo com admiração, mas ao fazer isso uma luz verde ilumina toda a cripta e um vento sobrenatural sopra dentro do lugar. A imagem translúcida do antigo cavaleiro aparece de pé a sua frente e sua voz fantasmagórica diz:''</p><p>- Nobre guerreiro. Consigo ver a importância da sua missão. Eu já cumpri o meu propósito em vida, então leve meu escudo para que ele possa te ajudar a cumprir o seu destino.</p><p>''O espírito do cavaleiro desaparece, mas você pode sentir que parte da sua energia entrou em seu corpo, te dando forças para seguir em sua jornada. Ao erguer o escudo você nota que ele é quase duas vezes maior que o seu e, em sinal de respeito, você coloca seu escudo ao lado da tumba.''</p><p> Ao admirar o escudo prateado você nota que sua superfície é lisa, sem nenhum símbolo, mas também sem nenhuma marca da ação do tempo. Você o prende ao seu braço esquerdo e parte para fora da cripta, agradecendo o antigo cavaleiro e voltando para a sua missão.''</p>";
  document.getElementById("mudarPagina06").style.display = "block";
}
function eGuerreiroC06() {
  energia = energia + 10;
  fogoFrio = 1;
  if (karma === 15) {
    document.getElementById("eGuerreiroA06").className = "buttonoff";
    document.getElementById("eGuerreiroA06").disabled = true;
  }
  document.getElementById("eGuerreiroB06").className = "buttonoff";
  document.getElementById("eGuerreiroB06").disabled = true;
  document.getElementById("eGuerreiroC06").className = "buttonoff";
  document.getElementById("eGuerreiroC06").disabled = true;
  if (karma === -15) {
    document.getElementById("eGuerreiroD06").className = "buttonoff";
    document.getElementById("eGuerreiroD06").disabled = true;
  }
  resultadoSextaEscolha.innerHTML =
    "<div>" +
    "<p>''Ao seguir para o oeste você a luz que vem lá de dentro ficar mais nítida e, ao entrar na caverna, é possível ver que realmente tem uma fogueira de chamas azuladas acesa lá dentro. Ainda assim, o que mais te surpreende é a figura que está ao lado da fogueira.''</p><p>''A princípio você acha que é uma criança por conta da sua estatura, mas seus cabelos brancos e sujos mostram que ela já deve ter vivido bastante.''</p><p>'' A criatura parece estar pintando alguma coisa na parede da caverna usando tinta de um grande pote, usando apenas as mãos. A pintura lembra uma paisagem, talvez um céu noturno, mas esse seu está partido com uma enorme rachadura. Ela para de pintar quando você se aproxima e vira o rosto para você.''</p><p>''Seu rosto velho lembra o de uma humana, com um dos olhos fechados graças a um ferimento antigo. Ainda assim, seu olho bom está bem aberto e focado em você, revelando um tom de azul bem forte e claro que consegue penetrar fundo na sua alma, capaz de enxergar tudo.''</p><p>- Você busca o Orbe do Destino para salvar seu reino da destruição. - ela diz com uma voz grave. - Será que você têm o que é preciso para cumprir o seu destino? Toque na fogueira, vamos. Ela pode lhe dar o poder que você precisa para consegui. Toque, vamos, não tenha medo. Afinal, você é um bravo guerreiro, não é?''</p><p>''A velha sorri pra você e é mais fácil contar quantos dentes ela ainda tem do que quantos estão lhe faltando na boca. Você nota que ela está te desafiando. Ela espera que você mude de ideia e vá embora, mas você decide mostrar a ela a sua determinação.''</p><p>''Você atende o desafo e estende a mão para tocar a fogueira. As chamas azuladas parecem sentir a sua presença e saltam da fogueira, como se estivessem vidas. Elas fazem contato com a sua mão, mas não parecem queimar. Pelo contrário, as chamas são frias como gelo e elas sobem pelo seu braço até chegarem no seu peito e penetrarem fundo até o seu coração, como uma adaga congelada.''</p><p>''O seu coração parece parar de bater e a sua respiração fica presa na sua garganta. Tudo a sua volta fica escuro e só o que você consegue ouvir é a velha rir ao seu lado. 'Cumpra o seu destino', a velha diz, e você puxa o ar de volta para os seus pulmões de uma vez só, ao mesmo tempo que os seus batimentos retornam e aceleram. Por um momento você pareceu ir até o reino dos mortos, mas você voltou com um novo poder para te ajudar a cumprir seu destino.''</p>";
  document.getElementById("mudarPagina06").style.display = "block";
}
function eGuerreiroD06() {
  energia = energia + 10;
  damaNoite = 1;
  if (karma === 15) {
    document.getElementById("eGuerreiroA06").className = "buttonoff";
    document.getElementById("eGuerreiroA06").disabled = true;
  }
  document.getElementById("eGuerreiroB06").className = "buttonoff";
  document.getElementById("eGuerreiroB06").disabled = true;
  document.getElementById("eGuerreiroC06").className = "buttonoff";
  document.getElementById("eGuerreiroC06").disabled = true;
  if (karma === -15) {
    document.getElementById("eGuerreiroD06").className = "buttonoff";
    document.getElementById("eGuerreiroD06").disabled = true;
  }
  resultadoSextaEscolha.innerHTML =
    "<div>" +
    "<p>''Enquanto você caminha pela caverna em direção a escuridão o tempo parece desacelerar. Sua visão fica um pouco turva, até que você sente um floco de neve se prender ao seu rosto e derreter, escorrendo como uma lágrima. Você finalmente consegue ver quem está cantando a canção que te chamou.''</p><p>''Sentada no meio da neve está uma jovem de longos cabelos ruivos e soltos, tão grandes que se esparramam pelo chão. Sua pele jovem é clara como a neve a sua volta e ela está usando somente um vestido fino de seda preta, que cobre apenas as partes mais importantes do seu corpo.''</p><p>- Estou tão sozinha. - ela diz. - Você veio me salvar? Me tirar dessa escuridão? Tenho fome... Na verdade, tenho sede. Muita sede. Você promete me alimentar? Promete cuidar de mim? Me prometa e serei sua. Serei fiel a você e juntos nós cuidaremos do mundo.</p><p>''Você caminha até onde a mulher está e lhe estende a mão. Dos seus próprios lábios você escuta as palavras 'Eu prometo', e então ela segura a sua mão. Quando você a puxa para perto, para que ela se levante, você finalmente se vê fora da ilusão e vê que na sua mão direita você está segurando uma espada. Ela é magnífica. Sua lâmina prateada tem fios vermelhos que correm por toda sua superfície como se fossem veias viajando pelo metal. Seu cabo é preto como a noite e em seu pomo existe um rubi vermelho como sangue, tão brilhante que ele parece até te observar.''</p><p>- Eu sou a Dama da Noite. - a espada diz em sua mente. - E daqui pra frente estaremos sempre juntos.</p><p>''Um barulho te chama atenção dentro da caverna e você nota que cinco pares de olhos brilhantes estão te observando. As criaturas estão te circulando como se estivessem preparadas para dar o bote em uma presa mais fraca. Infelizmente elas não sabem o quanto estão em desvantagem.''</p><p>''Você joga seu escudo do leão no chão, para nunca mais ergue-lo novamente. Tudo o que você precisa está com você. Em sua mente você sabe que ela está sorrindo e em seu ouvido você escuta a Dama da Noite sussurrar que tem sede.''</p>";
  document.getElementById("mudarPagina06").style.display = "block";
}

function mudarPagina06() {
  document.getElementById("mudarPagina06").className = "buttonoff";
  document.getElementById("mudarPagina06").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    document.getElementById("setimoTexto").style.display = "block";
    if (karma === 15) {
      document.getElementById("eGuerreiroA07").style.display = "block";
    }
    if ((karma !== 15) & (karma !== -15)) {
      document.getElementById("eGuerreiroB07").style.display = "block";
    }
    document.getElementById("eGuerreiroC07").style.display = "block";
    if (fogoFrio === 1) {
      document.getElementById("eGuerreiroD07").style.display = "block";
    }
    if (damaNoite === 1) {
      document.getElementById("eGuerreiroE07").style.display = "block";
    }
    console.log(energia, karma);
  }
}

function eGuerreiroA07() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA07").className = "buttonoff";
    document.getElementById("eGuerreiroA07").disabled = true;
  }
  if ((karma !== 15) & (karma !== -15)) {
    document.getElementById("eGuerreiroB07").className = "buttonoff";
    document.getElementById("eGuerreiroB07").disabled = true;
  }
  document.getElementById("eGuerreiroC07").className = "buttonoff";
  document.getElementById("eGuerreiroC07").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD07").className = "buttonoff";
    document.getElementById("eGuerreiroD07").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE07").className = "buttonoff";
    document.getElementById("eGuerreiroE07").disabled = true;
  }
  resultadoSetimaEscolha.innerHTML =
    "<div>" +
    "<p>''Sua espada se ilumina novamente com o seu comando e você põe seu escudo entre você a pantera a sua frente, partindo para o ataque. Seu golpe vem de cima pra baixo na diagonal, mas a pantera já estava esperando por isso e salta para trás, esquivando do seu ataque, o que te deixa surpreso.''</p><p>''A segunda pantera aproveita a abertura que você deixou e ataca com suas garras, arranhando suas costas. Pelo visto é assim que elas gostam de caçar. Uma pantera provoca a presa enquanto a outra ataca, enfraquecendo sua vítima pouco a pouco. Infelizmente, para elas, as panteras não estão acostumadas a lidar com presas que sabem se adapta a uma estratégias durante uma luta.''</p><p>''Você faz um novo ataque, dessa vez contra a segunda pantera, que salta para trás, assim como fez a primeira, mas o seu ataque foi apenas uma finta. Seu ataque verdadeiro fez seu corpo girar e estocar a primeira pantera enquanto ela saltava com a boca aberta contra o seu pescoço. A criatura não teve tempo de desviar e abocanhou a sua espada, que lhe atravessou a boca e a garganta com uma estocada precisa.''</p><p>''Por um momento a pantera sobrevivente não entendeu como sua parceira tinha tombado no chão e, furiosa, ela saltou na sua direção, mas você ergueu seu escudo a tempo, se defendendo do ataque e mantendo a criatura de pé com as patas dianteiras apoiadas no seu escudo. Esse movimento te deu tempo suficiente para girar o escudo para sua esquerda e expor o flanco da besta, que você prontamente atacou com um corte de baixo para cima.''</p><p>''Seu ataque preciso abriu um ferimento enorme no pescoço da pantera, que balançou a cabeça tontamente enquanto o sangue escorria do ferimento e logo tombou no chão. Você olhou para aquela cena ofegante, mas silêncio. Aquele provavelmente seria apenas o primeiro desafio nessa floresta.''</p>";
  document.getElementById("mudarPagina07").style.display = "block";
}
function eGuerreiroB07() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA07").className = "buttonoff";
    document.getElementById("eGuerreiroA07").disabled = true;
  }
  if ((karma !== 15) & (karma !== -15)) {
    document.getElementById("eGuerreiroB07").className = "buttonoff";
    document.getElementById("eGuerreiroB07").disabled = true;
  }
  document.getElementById("eGuerreiroC07").className = "buttonoff";
  document.getElementById("eGuerreiroC07").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD07").className = "buttonoff";
    document.getElementById("eGuerreiroD07").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE07").className = "buttonoff";
    document.getElementById("eGuerreiroE07").disabled = true;
  }
  resultadoSetimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você empunha sua espada e põe seu escudo entre você a pantera a sua frente, partindo para o ataque. Seu golpe vem de cima pra baixo na diagonal, mas a pantera já estava esperando por isso e salta para trás, esquivando do seu ataque, o que te deixa surpreso.''</p><p>''A segunda pantera aproveita a abertura que você deixou e ataca com suas garras, arranhando suas costas. Pelo visto é assim que elas gostam de caçar. Uma pantera provoca a presa enquanto a outra ataca, enfraquecendo sua vítima pouco a pouco. Infelizmente, para elas, as panteras não estão acostumadas a lidar com presas que sabem se adapta a uma estratégias durante uma luta.''</p><p>''Você faz um novo ataque, dessa vez contra a segunda pantera, que salta para trás, assim como fez a primeira, mas o seu ataque foi apenas uma finta. Seu ataque verdadeiro fez seu corpo girar e estocar a primeira pantera enquanto ela saltava com a boca aberta contra o seu pescoço. A criatura não teve tempo de desviar e abocanhou a sua espada, que lhe atravessou a boca e a garganta com uma estocada precisa.''</p><p>''Por um momento a pantera sobrevivente não entendeu como sua parceira tinha tombado no chão e, furiosa, ela saltou na sua direção, mas você ergueu seu escudo a tempo, se defendendo do ataque e mantendo a criatura de pé com as patas dianteiras apoiadas no seu escudo. Esse movimento te deu tempo suficiente para girar o escudo para sua esquerda e expor o flanco da besta, que você prontamente atacou com um corte de baixo para cima.''</p><p>''Seu ataque preciso abriu um ferimento enorme no pescoço da pantera, que balançou a cabeça tontamente enquanto o sangue escorria do ferimento e logo tombou no chão. Você olhou para aquela cena ofegante, mas silêncio. Aquele provavelmente seria apenas o primeiro desafio nessa floresta.''</p>";
  document.getElementById("mudarPagina07").style.display = "block";
}
function eGuerreiroC07() {
  energia = energia - 5;
  if (karma === 15) {
    document.getElementById("eGuerreiroA07").className = "buttonoff";
    document.getElementById("eGuerreiroA07").disabled = true;
  }
  if ((karma !== 15) & (karma !== -15)) {
    document.getElementById("eGuerreiroB07").className = "buttonoff";
    document.getElementById("eGuerreiroB07").disabled = true;
  }
  document.getElementById("eGuerreiroC07").className = "buttonoff";
  document.getElementById("eGuerreiroC07").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD07").className = "buttonoff";
    document.getElementById("eGuerreiroD07").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE07").className = "buttonoff";
    document.getElementById("eGuerreiroE07").disabled = true;
  }
  resultadoSetimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você entra em posição de ataque para encarar as bestas. Elas te observam atentamente e esperam seu ataque, mas o que você faz é justamente o contrário.''</p><p>''Você volta para a mata fugindo das panteras, que por um momento não entendem bem o que aconteceu, mas elas rapidamente saltam pra dentro da mata seguindo no seu encalço.''</p><p>''A mata fechada é tão ruim pra o perseguidor quanto para a caça. Uma das panteras chega a te alcançar e consegue arranhar suas costas com um ataque, mas é atrasada por alguns galhos e troncos de árvores, que te permitem continuar a fuga.''</p><p>''Você subitamente surge em uma clareira. Ainda é possível ouvir o movimento das panteras na mata, mas elas não chegam a saltar para dentro da clareira. Elas simplesmente param e parecem dar meia volta até que o lugar ao seu redor fica silencioso.''</p>";
  document.getElementById("mudarPagina07").style.display = "block";
}
function eGuerreiroD07() {
  fogoFrio = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA07").className = "buttonoff";
    document.getElementById("eGuerreiroA07").disabled = true;
  }
  if ((karma !== 15) & (karma !== -15)) {
    document.getElementById("eGuerreiroB07").className = "buttonoff";
    document.getElementById("eGuerreiroB07").disabled = true;
  }
  document.getElementById("eGuerreiroC07").className = "buttonoff";
  document.getElementById("eGuerreiroC07").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD07").className = "buttonoff";
    document.getElementById("eGuerreiroD07").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE07").className = "buttonoff";
    document.getElementById("eGuerreiroE07").disabled = true;
  }
  resultadoSetimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você vira a palma da sua mão pra cima, como se estivesse erguendo uma taça, e dela surgem chamas azuladas, como se sua mão fosse uma tocha.''</p><p>''Você sente o frio delas na sua mão e ao apontar sua palma para as panteras as chamas parecem entender o seu desejo, se espalhando pelo ar e perseguindo as bestas até que elas são engolfadas por completo.''</p><p>''As panteras gemem em agonia, até que de subto as chamas se transformam em pequenas montanhas de gelo, prendendo as panteras para sempre em um caixão de gelo.''</p>";
  document.getElementById("mudarPagina07").style.display = "block";
}
function eGuerreiroE07() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA07").className = "buttonoff";
    document.getElementById("eGuerreiroA07").disabled = true;
  }
  if ((karma !== 15) & (karma !== -15)) {
    document.getElementById("eGuerreiroB07").className = "buttonoff";
    document.getElementById("eGuerreiroB07").disabled = true;
  }
  document.getElementById("eGuerreiroC07").className = "buttonoff";
  document.getElementById("eGuerreiroC07").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD07").className = "buttonoff";
    document.getElementById("eGuerreiroD07").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE07").className = "buttonoff";
    document.getElementById("eGuerreiroE07").disabled = true;
  }
  resultadoSetimaEscolha.innerHTML =
    "<div>" +
    "<p>- Humm... Eu nunca provei panteras antes. - a espada sussurra em seu ouvido. - Me dê a vida delas.</p><p>''Você aponta a lâmina da espada na direção das bestas e diz 'Suas vidas me pertencem'. As panteras emitem um rosnado baixo e uma delas da alguns passos para a sua direita, tentando te circular e expor suas costas para a outra pantera.''</p><p>''Tão rápido quanto elas é o seu salto para frente, encurtando rapidamente a distância entre você e a primeira pantera. Você aponta sua mão esquerda na direção da criatura e põe a sua lâmina em posição vertical rente aos seus olhos, se preparando para uma estocada.''</p><p>''A pantera da um salto pra trás, já antecipando o seu ataque, mas ela não é rápida o suficiente. A Dama da Noite corta o ar e sua lâmina parece perseguir o coração da pantera até que ela finalmente alcança.''</p><p>''O sangue que sai do ferimento faz a lâmina prateada ganhar um tom rosado instantaneamente, como se a espada estivesse drenando o sangue da pantera. A outra besta emite um ganido baixo de medo e surpresa quando vê sua companheira tombar e, quando você se vira para encara-la, ela vê a morte em seus olhos.''</p><p>''Amedrontada, a pantera simplesmente se vira e entra na floresta, deixando sua companheira para trás. Em sua mente você pode ouvir a dama da noite saborear o sangue da besta 'Nada mal', ela diz.''</p>";
  document.getElementById("mudarPagina07").style.display = "block";
}

function mudarPagina07() {
  document.getElementById("mudarPagina07").className = "buttonoff";
  document.getElementById("mudarPagina07").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    document.getElementById("oitavoTexto").style.display = "block";
    if (karma === 15) {
      document.getElementById("eGuerreiroA08").style.display = "block";
    }
    document.getElementById("eGuerreiroB08").style.display = "block";
    document.getElementById("eGuerreiroC08").style.display = "block";
    if (fogoFrio === 1) {
      document.getElementById("eGuerreiroD08").style.display = "block";
    }
    if (escudo === 1) {
      document.getElementById("eGuerreiroE08").style.display = "block";
    }
    if (damaNoite === 1) {
      document.getElementById("eGuerreiroF08").style.display = "block";
    }
  }
  console.log(energia, karma);
}

function eGuerreiroA08() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''Você ergue sua espada e faz com que ela se ilumine, afastando as sombras da floresta, mas ao mesmo tempo chamando toda a atenção do Observador. Ele faz três disparos na sua direção e você defende os raios com seu escudo que é quase perfurado por eles.''</p><p>''Você toma coragem e avança contra a aberração, atacando com sua espada e fazendo um corte de cima pra baixo, tentando cortar a criatura ao meio. Ela flutua para o lado e evita o corte mortal, mas você acaba conseguindo cortar quatro tentáculos que caem no chão se contorcendo.''</p><p>''O Observador fica furioso e de seu olho central ele dispara um raio maior na sua direção. Você ergue novamente seu escudo, mas ele não consegue te defender. Você sente seu corpo subtamente enrijecer. Você tenta se mover, mas não consegue, seu corpo não responde. Seu corpo agora é uma estátua de pedra e você está morto.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}
function eGuerreiroB08() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''Você se põe a correr e o observador dispara dois raios na sua direção. Um deles acerta seu ombro de raspão e a dor parece a mesma de ser queimado com uma brasa. Você se joga atrás de uma das estátuas e respira ofegante, a dor ainda marcando seu ombro. O observador agita seus tentáculos, te procurando e disparando raios aleatórios pela clareira, atingindo o chão e algumas árvores.''</p><p>''Um pequeno felino do mato corre pela clareira assustado com os raios e então o Observador foca seu olho maior nele, disparando um raio grande de luz, como se fosse a luz de um farol. A luz cobre o corpo do gato por inteiro e você pode ver como seu corpo enrijece e logo de transforma em uma estátua de pedra, mas você aproveita a distração do monstro para ir para trás de outra estátua. Pelo visto a fraqueza do Observador é justamente focar sua atenção em um alvo''</p><p>''. Você acerta o braço da estátua que está te escondendo com o pomo da sua espada e depois arremessa o membro petrificado na direção oposta a sua. A estratégia funciona e o Observador foca sua atenção no braço ainda rolando pelo chão e dispara seu raio petrificador na peça desmembrada.''</p><p>''Você aproveita a oportunidade para chegar até as costas do monstro e atacar com sua espada. Ela atravessa a aberração e sua ponta sai no olho do observador, que murcha como um balão furado e tomba no chão. Seus pequenos tentáculos ainda estremecem, mas eles logo param de se mexer e a floresta volta a ficar em silêncio.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}
function eGuerreiroC08() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''Você se põe a correr de volta pra mata e o observador dispara dois raios na sua direção. Eles acertam suas costas de raspão, mas a dor parece a mesma de ser queimado com uma brasa. Distraído pela dor, você acaba tropeçando em uma raíz de árvore e cai no chão, deixando sua arma cair. Você se vira para encarar a criatura e vê que ela está diante de você, admirando a sua cara de medo. O observador dispara um raio de luz de seu olho central, que te atinge em cheio, fazendo seu corpo enrijecer e aos poucos virar pedra, mantendo para sempre o pavor estampado em seu rosto. Você está morto.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}
function eGuerreiroD08() {
  fogoFrio = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''Você vira a palma da sua mão pra cima, como se estivesse erguendo uma taça, e dela surgem chamas azuladas, como se sua mão fosse uma tocha.''</p><p>''Você sente o frio delas na sua mão e, ao apontar sua palma para o Observador, as chamas parecem entender o seu desejo, se espalhando pelo ar e perseguindo a aberração até que ela é engolfadas por completo por aquela energia azul.''</p><p>''A criatura se contorce pela ação do frio e tenta disparar raios de seus olhos para todas as direções, mas é inútil.''</p><p>''Logo as chamas se transformam e congelam tudo ao seu redor, transformando o Observador em uma incrível estátua, presa para sempre em um caixão de gelo.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}
function eGuerreiroE08() {
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''O escudo que você encontrou na cripta é grande o suficiente para proteger grande parte do seu corpo dos raios menores do observador. A aberração dispara três raios de seus tentáculos, mas cada um dos raios que se choca contra seu escudo acaba sendo desviado para outra direção.''</p><p>''O observador se enfurece com esse resultado e de seu grande olho central ele dispara um raio de luz ainda maior que os outros, que pode cobrir quase todo o seu corpo. Ainda assim, seu escudo consegue direcionar o raio para baixo e você nota que por onde o raio passa se forma um caminho petrificado.''</p><p>''Você não pensa duas vezes e direciona o raio de volta para o observador. Em choque a criatura arregala ainda mais os seus olhos e você pode ouvir enquanto o corpo da aberração estala e começa a se tornar pedra. Ela tomba no chão como um bizarro bloco de pedra que nunca mais causará mal a ninguém.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}
function eGuerreiroF08() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA08").className = "buttonoff";
    document.getElementById("eGuerreiroA08").disabled = true;
  }
  document.getElementById("eGuerreiroB08").className = "buttonoff";
  document.getElementById("eGuerreiroB08").disabled = true;
  document.getElementById("eGuerreiroC08").className = "buttonoff";
  document.getElementById("eGuerreiroC08").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD08").className = "buttonoff";
    document.getElementById("eGuerreiroD08").disabled = true;
  }
  if (escudo === 1) {
    document.getElementById("eGuerreiroE08").className = "buttonoff";
    document.getElementById("eGuerreiroE08").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroF08").className = "buttonoff";
    document.getElementById("eGuerreiroF08").disabled = true;
  }
  resultadoOitavaEscolha.innerHTML =
    "<div>" +
    "<p>''Em sua mente você sente a Dama da Noite estremecer de nojo com a sua intenção. Ela certamente não quer perfurar o Observador, mas ela é fiel a você e não nega sua vontade.''</p><p>'' A criatura dispara dois raios na sua direção, mas desde que você encontrou a espada os seus reflexos estão mais rápidos e você não tem dificuldade para evitar os disparos. Como um esgrimista você coloca a espada a frente do seu corpo e dá alguns passos bem abertos na direção da aberração, até finalmente ficar frente a frente com a criatura.''</p><p>''Após duas estocadas certeiras você consegue cegar dois tentáculos do monstro, mas isso só serve para deixar o Observador furioso. Ele solta um urro de sua boca aberta e então seu olho central dispara um raio maior na sua direção. Você tenta se desviar, mas o raio é muito amplo e você sente que ele atingiu sua perna.''</p><p>''Você sente sua perna formigar e, para sua surpresa, toda a superfície tocada pelo raio se transforma em pedra. Você sente uma dor absurda em seu membro que virou pedra e se vê preso no lugar. Em sua mente a Dama da Noite grita, implorando para que você se mova, mas sua perna te impede de se afastar. O Observador abre sua bocarra imensa e em uma dentada ele abocanha metade do seu corpo, te engolindo junto com a espada. Você está morto.''</p>";
  document.getElementById("mudarPagina08").style.display = "block";
}

function mudarPagina08() {
  document.getElementById("mudarPagina08").className = "buttonoff";
  document.getElementById("mudarPagina08").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    document.getElementById("nonoTexto").style.display = "block";
    if (karma === 15) {
      document.getElementById("eGuerreiroA09").style.display = "block";
    }
    document.getElementById("eGuerreiroB09").style.display = "block";
    if (fogoFrio === 1) {
      document.getElementById("eGuerreiroC09").style.display = "block";
    }
    if (damaNoite === 1) {
      document.getElementById("eGuerreiroD09").style.display = "block";
    }
  }
  console.log(energia, karma);
}

function eGuerreiroA09() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA09").className = "buttonoff";
    document.getElementById("eGuerreiroA09").disabled = true;
  }
  document.getElementById("eGuerreiroB09").className = "buttonoff";
  document.getElementById("eGuerreiroB09").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroC09").className = "buttonoff";
    document.getElementById("eGuerreiroC09").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroD09").className = "buttonoff";
    document.getElementById("eGuerreiroD09").disabled = true;
  }
  resultadoNonaEscolha.innerHTML =
    "<div>" +
    "<p>''Você da um comando usando apenas a sua vontade e sua espada se ilumina. O Golem parece não gostar do que está vendo e ruge na sua direção. Você consegue sentir um sopro gelado no seu rosto, indicando que aquelas chamas sobrenaturais certamente vão te congelar se você for atingido. Ainda assim você se mantém firme e corre pra cima do Golem.''</p><p>''A criatura vê a sua aproximação e desfere um soco simples e reto, mas com uma força devastadora. Você usa seu escudo para aparar o golpe, mudando a sua trajetória para que ele não te atinja e para que você continue se aproximando do Golem. Em seguida você atinge o peito do monstro com sua espada iluminada e o choque de energias produz um estalo e uma vibração que te joga alguns metros para trás.''</p><p>''Você se levanta com um pouco de dificultade, mas pode ver que seu golpe deixou uma grande rachadura no peito do Golem. A criatura parece furiosa e avança novamente contra você. Seus passos são pesados e fazem a sala toda estremecer, até que ele se aproxima de você e te golpeia com um tapa de baixo para cima. Você ainda se defende com seu escudo, mas a força do golpe é tanta que você voa pela sala por mais quatro metros, caindo girando no chão. Ao olhar para o seu escudo, você vê que ele está em pedaços. Você se levanta com dificuldade e encara o monstro novamente. Ele abre seus braços te encarando e suas chamas azuis se intensificam, fazendo com que a temperatura na sala caia drasticamente.''</p><p>''Tudo o que você consegue fazer é segurar sua espada com as duas mãos e invocar novamente o poder da Luz. 'Luz, dê-me forças.', você diz em pensamento enquanto aperta o cabo da sua espada e foca sua atenção no Golem. Sua espada responde e a luz dela se intensifica ao ponto de você enxergar apenas a silhueta do monstro a sua frente. Por fim, você usa sua espada para cortar o ar a sua frente e ela produz uma lâmina muito maior do que o seu tamanho normal, toda feita de luz. A lâmina de luz atinge o Golem de maneira certeira, cortando a criatura ao meio e fazendo com que a sala se estremeça novamente com o choque de forças. Os pedaços do construto caem no chão e você se ajoelha ofegante enquanto uma nova porta se abre em uma das paredes da sala.''</p>";
  document.getElementById("mudarPagina09").style.display = "block";
}
function eGuerreiroB09() {
  energia = energia - 10;
  if (karma === 15) {
    document.getElementById("eGuerreiroA09").className = "buttonoff";
    document.getElementById("eGuerreiroA09").disabled = true;
  }
  document.getElementById("eGuerreiroB09").className = "buttonoff";
  document.getElementById("eGuerreiroB09").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroC09").className = "buttonoff";
    document.getElementById("eGuerreiroC09").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroD09").className = "buttonoff";
    document.getElementById("eGuerreiroD09").disabled = true;
  }
  resultadoNonaEscolha.innerHTML =
    "<div>" +
    "<p>''Você guarda sua espada na bainha. Ao olhar em volta é possível ver algumas armas antigas no chão. Sua primeira tentativa é uma lança. Você a puxa com o pé e se abaixa para pegá-la com a mão. Ainda parece boa mesmo depois de uma centena de anos largada naquele lugar. O golem então avança na sua direção e você arremessa a lança contra ele. A lança atinge a junta do braço esquerdo do golem, mas não consegue atrasar seu movimento. A criatura desfere um poderoso golpe contra você, que se joga pro lado para desviar, fazendo com que o soco atinja a parede, fazendo a sala estremecer.''</p><p>''Em seguida você pega um grande martelo de duas mãos do chão. A arma parece ser pesada o suficiente para atrasar o Golem e você parte pra cima da criatura, que ainda está se recuperando do golpe na parede. Seu martelo acerta a criatura atrás de onde seria o seu joelho, fazendo com que ela perca metade da sua perna direita, tombando ajoelhada no chão. Você aproveita a abertura e gira o martelo novamente, acertando a criatura nas costas, fazendo com que a pedra da sua estrutura estale. Quando você prepara o golpe final, a criatura gira seu braço e acerta seu peito com um tapa, te fazendo voar por pelo menos cinco metros pela sala. Você cai girando e se chocando contra os restos dos vários esqueletos, sentindo suas costelas quebradas e gritando de dor.''</p><p>''Você se levanta com dificuldade e vê o Golem se arrastando para pegar de volta o pedaço da perna arrancado, o que te deve dar alguns segundos pra se recuperar. Você com certeza não vai aguentar outro golpe desses, então é preciso acabar com a luta no próximo ataque. O martelo que você usou ainda está próximo de você e com apenas alguns passos você o empunha novamente. O esforço faz suas costelas quebradas protestarem, mas você precisa vencer. Você corre novamente na direção do Golem, que novamente está de pé. A criatura vê a sua aproximação e abre os braços pra te encarar, intensificando suas chamas congelantes e então correndo ao seu encontro.''</p><p>''Quando vocês se aproximam, o Golem desfere outro ataque com seu punho direito, mas você usa o martelo para golpear a parte de dentro do braço do construto, separando o membro e evitando um ataque. Quando você tenta desferir um segundo golpe com o martelo as suas costelas gritam de dor e você fica paralizado por um instante. Momento esse que é sufificiente para o Golem atacar novamente, mas usando seu punho esquerdo. O problema é que, quando ele tenta girar o braço pra te golpear, o braço acaba travado. Você vê a lança que você atirou contra o Golem ainda presa na junta do braço esquerdo travar o movimento do construto e você usa essa oportunidade para atacar o joelho do monstro, fazendo com que ele abaixe sua cabeça e te dê a oportunidade de aplicar um golpe de cima para baixo, esmagando seu crânio de pedra, fazendo os pedaços do construto caírem no chão. Você se ajoelha ofegante enquanto uma nova porta se abre em uma das paredes da sala.''</p>";
  document.getElementById("mudarPagina09").style.display = "block";
}
function eGuerreiroC09() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA09").className = "buttonoff";
    document.getElementById("eGuerreiroA09").disabled = true;
  }
  document.getElementById("eGuerreiroB09").className = "buttonoff";
  document.getElementById("eGuerreiroB09").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroC09").className = "buttonoff";
    document.getElementById("eGuerreiroC09").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroD09").className = "buttonoff";
    document.getElementById("eGuerreiroD09").disabled = true;
  }
  resultadoNonaEscolha.innerHTML =
    "<div>" +
    "<p>''Você vira a palma da sua mão pra cima, como se estivesse erguendo uma taça, e dela surgem chamas azuladas, como se sua mão fosse uma tocha.''</p><p>''Você sente o frio delas na sua mão e, ao apontar sua palma para o Golem, as chamas parecem entender o seu desejo, se espalhando pelo ar e perseguindo o construto até que ele é engolfado por completo por aquela energia azul.''</p><p>''O problema é que as suas chamas se misturam a do Golem. O construto abre sua bocarra e devolve as chamas azuis contra você e você sente o frio do submundo consumir suas forças e as chamas congelam tudo ao seu redor, te prendendo para sempre em um caixão de gelo. Você está morto.''</p>";
  document.getElementById("mudarPagina09").style.display = "block";
}
function eGuerreiroD09() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA09").className = "buttonoff";
    document.getElementById("eGuerreiroA09").disabled = true;
  }
  document.getElementById("eGuerreiroB09").className = "buttonoff";
  document.getElementById("eGuerreiroB09").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroC09").className = "buttonoff";
    document.getElementById("eGuerreiroC09").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroD09").className = "buttonoff";
    document.getElementById("eGuerreiroD09").disabled = true;
  }
  resultadoNonaEscolha.innerHTML =
    "<div>" +
    "<p>- Um monstro pior do que o outro - a Dama da Noite diz na sua mente e você sente a espada estremecer na sua mão.</p><p>''Você corre na direção do monstro e prepara sua espada para atacar. O construto ergue seu punho coberto de chamas azuis e te ataca, mas graças aos reflexos aprimorados que a espada te deu o ataque do Golem parece vir lento como uma tartaruga. Você joga o corpo pro lado e se esquiva, cravando a espada no peito do monstro, esperando que ela perfure a rocha.''</p><p>''A espada consegue perfurar o Golem, mas isso não tem o efeito que você estava esperando. A Dama da Noite parece drenar as chamas azuladas para dentro da sua lâmina, que fica azul como um gelo profundo. Você sente a lâmina gritar de dor e essa energia é compartilhada com você. Você sente tudo ficar frio e seu corpo enrijece, te transformando em uma estátua de gelo. Você está morto.''</p>";
  document.getElementById("mudarPagina09").style.display = "block";
}

function mudarPagina09() {
  document.getElementById("mudarPagina09").className = "buttonoff";
  document.getElementById("mudarPagina09").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    document.getElementById("decimoTexto").style.display = "block";
    document.getElementById("motivacao10").style.display = "block";
    if (karma === 15) {
      motivacao10.innerHTML =
        "<div>" +
        "<p>''Você pede para que a Luz te dê forças para continuar em frente e seguir com o seu objetivo enquanto dá seus próximos passos. Ela certamente está te sustentando, porque seus ferimentos são muito severos para uma pessoa normal aguentar.''</p>";
    } else if (damaNoite === 1) {
      motivacao10.innerHTML =
        "<div>" +
        "<p>''Você segura no punho da Dama da Noite e pede para que ela te ajude a seguir em frente. Por um momento você fecha os olhos e sente que ela está empurrando suas costas para que você siga em frente e isso te faz continuar.''</p>";
    } else {
      motivacao10.innerHTML =
        "<div>" +
        "<p>''Você pensa no seu reino e na sua família e isso te ajuda a seguir em frente. É como se eles estivessem ali, te puxando pela mão para que você consiga dar mais um passo em direção ao seu destino.''</p>";
    }
    if (karma === 15) {
      document.getElementById("eGuerreiroA10").style.display = "block";
    }
    if ((karma !== 15) & (damaNoite !== 1)) {
      document.getElementById("eGuerreiroB10").style.display = "block";
    }
    document.getElementById("eGuerreiroC10").style.display = "block";
    if (fogoFrio === 1) {
      document.getElementById("eGuerreiroD10").style.display = "block";
    }
    if (damaNoite === 1) {
      document.getElementById("eGuerreiroE10").style.display = "block";
    }
  }
  console.log(energia, karma);
}
function eGuerreiroA10() {
  final = 1;
  if (karma === 15) {
    document.getElementById("eGuerreiroA10").className = "buttonoff";
    document.getElementById("eGuerreiroA10").disabled = true;
  }
  if ((karma !== 15) & (damaNoite !== 1)) {
    document.getElementById("eGuerreiroB10").className = "buttonoff";
    document.getElementById("eGuerreiroB10").disabled = true;
  }
  document.getElementById("eGuerreiroC10").className = "buttonoff";
  document.getElementById("eGuerreiroC10").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD10").className = "buttonoff";
    document.getElementById("eGuerreiroD10").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE10").className = "buttonoff";
    document.getElementById("eGuerreiroE10").disabled = true;
  }
  resultadoDecimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você pede novamente o poder da Luz e ela preenche seu corpo com calor. Você sente suas forças retornarem, mas a Luz deixa bem claro qual será o preço a pagar por isso. Inspirado pelo seu propósito você aceita e avança contra o cavaleiro negro com sua espada de luz.''</p><p>''O cavaleiro se surpreende com a sua chegada. Não era para mais ninguém estar ali além dos soldados do templo, mas a sua figura ensanguentada e segurando uma espada de luz faz com que ele arregale os olhos, empurre pra lado o soldado que está lutando com ele para então te encarar. Sua espada de luz encontra a espada de lâmina escura do cavaleiro negro e as duas se chocam como se fossem feitas de energias opostas.''</p><p>- Um Guerreiro da Luz?! - o cavaleiro negro exclama. - Sua ordem deveria estar extinta! Como você surge para me desafiar?<br''O cavaleiro usa sua força e te empurra para trás com sua espada. Ele segura a arma com as duas mãos e ela parece ser envolvida em tentáculos de energia escura.''</p><p>- Muito bem, aceito seu desafio - a lâmina do cavaleiro se torna escura como a noite, fazendo com que a luz em volta dele se torne enfraquecida. - Venha!</p><p>''Você atende o desafio e segura sua espada com as duas mãos, intensificando sua energia. Nesse momento os soldados e os mercenários em volta até pararam de lutar para assistir ao duelo. Quando as espadas de energias opostas finalmente se encontram, o som do rugido de um trovão surge na sala. A onda de choque das energias se encontrando racha as paredes, arremessa pro chão os mercenários e soldados e, por fim, racha o cristal da Orbe do Destino.''</p>";
  document.getElementById("mudarPagina10").style.display = "block";
}
function eGuerreiroB10() {
  final = 2;
  if (karma === 15) {
    document.getElementById("eGuerreiroA10").className = "buttonoff";
    document.getElementById("eGuerreiroA10").disabled = true;
  }
  if ((karma !== 15) & (damaNoite !== 1)) {
    document.getElementById("eGuerreiroB10").className = "buttonoff";
    document.getElementById("eGuerreiroB10").disabled = true;
  }
  document.getElementById("eGuerreiroC10").className = "buttonoff";
  document.getElementById("eGuerreiroC10").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD10").className = "buttonoff";
    document.getElementById("eGuerreiroD10").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE10").className = "buttonoff";
    document.getElementById("eGuerreiroE10").disabled = true;
  }
  resultadoDecimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você respira de maneira ofegante e olha aquela cena. Sua única oportunidade é atacar o cavaleiro enquanto ele está distraído lutando com os soldados. Você segura a espada com as duas mãos e corre pra cima do líder dos mercenários. O cavaleiro se surpreende com a sua aparição. Não era para mais ninguém estar ali além dos soldados do templo, mas a sua figura ensanguentada e empunhando sua espada contra ele o deixa surpreso. Ele empurra para lado o soldado do templo que o está enfrentando para te encarar. Sua espada se encontra com a dele emitindo um som característico de metal se chocando contra metal.''</p><p>- Um invasor? - o cavaleiro fala entre os dentes enquanto faz força para segurar seu ataque. - Não importa, você não pode se colocar no meu caminho! - ele empurra sua espada para trás e da um chute no seu peito, fazendo com que você se afaste. - Nada vai se colocar no caminho da minha conquista! Obterei o Orbe e destruirei todos aqueles que ousarem se opor!</p><p>''O cavaleiro segura sua espada de lâmina escura com as duas mãos e ela parece ser envolvida por tentáculos de energia escura. Sua lâmina se torna escura como a noite, fazendo com que a luz em volta dele se torne enfraquecida. O cavaleiro ergue sua espada e desfere seu ataque final.''</p>";
  document.getElementById("mudarPagina10").style.display = "block";
}
function eGuerreiroC10() {
  energia = 0;
  if (karma === 15) {
    document.getElementById("eGuerreiroA10").className = "buttonoff";
    document.getElementById("eGuerreiroA10").disabled = true;
  }
  if ((karma !== 15) & (damaNoite !== 1)) {
    document.getElementById("eGuerreiroB10").className = "buttonoff";
    document.getElementById("eGuerreiroB10").disabled = true;
  }
  document.getElementById("eGuerreiroC10").className = "buttonoff";
  document.getElementById("eGuerreiroC10").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD10").className = "buttonoff";
    document.getElementById("eGuerreiroD10").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE10").className = "buttonoff";
    document.getElementById("eGuerreiroE10").disabled = true;
  }
  resultadoDecimaEscolha.innerHTML =
    "<div>" +
    "<p>''O Orbe do Destino está bem a sua frente e você não hesita em correr até ele enquanto os outros combatentes estão ocupados uns com os outros. Você tropeça no corpo de um dos mercenários enquanto corre, mas logo recupera o equilíbrio e continua a correr, ainda sentindo as dores do último combate, mas o cavaleiro negro te vê quando ainda estão faltando apenas alguns poucos metros para você tocar o Orbe.''</p><p>- Ladrão! - o cavaleiro negro grita, chutando para o chão o soldado que o enfrentava e apontando a espada contra você.</p><p>''Da lâmina escura parecem brotar tentáculos feitos de sombra materializada e eles avançam contra você como se fossem um polvo atrás da sua presa. Os tentáculos prendem seu corpo e ele te ergue no ar, como se estivesse levantando um boneco.''</p><p>- Você achou que eu não estava preparado, mas eu nunca tirei os olhos do meu prêmio. - o cavaleiro então usa sua mão esquerda para puxar os tentáculos e então crava a lâmina no seu peito. - E o seu erro foi achar que podia me impedir.''</p><p>''Você está morto.''</p>";
  document.getElementById("mudarPagina10").style.display = "block";
}
function eGuerreiroD10() {
  fogoFrio = 0;
  document.getElementById("eGuerreiroD10").className = "buttonoff";
  document.getElementById("eGuerreiroD10").disabled = true;
  resultadoDecimaEscolha.innerHTML =
    "<div>" +
    "<p>''Você vira a palma da sua mão pra cima, como se estivesse erguendo uma taça, mas nada acontece. Pelo visto o poder das chamas que estava com você acabou sendo drenado na luta contra o Golem do Submundo. Melhor escolher novamente.''</p>";
}
function eGuerreiroE10() {
  final = 3;
  if (karma === 15) {
    document.getElementById("eGuerreiroA10").className = "buttonoff";
    document.getElementById("eGuerreiroA10").disabled = true;
  }
  if ((karma !== 15) & (damaNoite !== 1)) {
    document.getElementById("eGuerreiroB10").className = "buttonoff";
    document.getElementById("eGuerreiroB10").disabled = true;
  }
  document.getElementById("eGuerreiroC10").className = "buttonoff";
  document.getElementById("eGuerreiroC10").disabled = true;
  if (fogoFrio === 1) {
    document.getElementById("eGuerreiroD10").className = "buttonoff";
    document.getElementById("eGuerreiroD10").disabled = true;
  }
  if (damaNoite === 1) {
    document.getElementById("eGuerreiroE10").className = "buttonoff";
    document.getElementById("eGuerreiroE10").disabled = true;
  }
  resultadoDecimaEscolha.innerHTML =
    "<div>" +
    "<p>- Me dê aquela vida - você sente a espada falar no seu ouvido. - Sua força vital é magnífica.</p><p>''Você esboça um pequeno sorriso, em parte porque esse já era seu objetivo e também pelo ciúme em ver sua espada desejando outro além de você. Você invoca a força sobrenatural da Dama da Noite e ela aprimora seus sentidos para uma última investida.''</p><p>''Você passa pelos combatentes como um borrão, deixando até mesmo a Orbe do Destino de lado para chegar até o pescoço do cavaleiro negro com a ponta da sua lâmina. Com uma estocada você finalmente o alcança, de maneira certeira no pescoço, mas o cavaleiro também é rápido e ele repele seu ataque no último momento, deixando apenas uma ferida superficial.''</p><p>- Vejo que o templo guardava uma última surpresa - o cavaleiro diz, passando a mão no pescoço onde foi feita a ferida. - Um assassino. Pois bem, vamos ver do que você é capaz.</p><p>''O cavaleiro segura sua espada de lâmina escura com as duas mãos e dela parecem brotar tentáculos de energia escura. Eles parecem feitos de sombra materializada e de repente avançam contra você como se fossem um polvo atrás da sua presa. Os tentáculos prendem seu corpo e ele te ergue no ar, como se estivesse levantando um boneco. Por um momento você fica assustado, achando que o fim chegou.''</p><p>- A brincadeira está apenas começando. - você escuta o sussurro da Dama da Noite em seu ouvido.</p><p>''As sombras que prendem seu corpo são repelidas por tentáculos feitos de sangue que saem a partir dos seus ferimentos. O cavaleiro recua surpreso, mas você se sente poderoso. Você bate seus tentáculos no chão, o que te joga pra frente, na direção do seu oponente, e então vocês começam a trocar golpes de espada. Um, dois, três... São muitos golpes, até que finalmente seus ataques rápidos começam a encontrar o corpo do seu oponente. Seus ataques causam apenas feridas superficiais, mas você nota o corpo do cavaleiro ficando mais lento e você ficando mais rápido. Sua lâmina está ficando rubra porque a cada golpe que ela acerta uma parte do sangue do cavaleiro acaba drenada.''</p><p>''Por fim, você dá uma estocada rápida na mão do cavaleiro, fazendo com que ele deixe a espada cair no chão. Surpreso, ele olha para você, mas a única coisa que você vê em seu rosto é o desespero. Com uma última estocada você perfura o coração do cavaleiro e você fala pra ele 'Eu serei o senhor de todos os destinos.' e então você puxa sua espada e deixa o corpo do cavaleiro tombar no chão, morto.''</p>";
  document.getElementById("mudarPagina10").style.display = "block";
}

function mudarPagina10() {
  document.getElementById("mudarPagina10").className = "buttonoff";
  document.getElementById("mudarPagina10").disabled = true;
  if (energia < 1) {
    alert(
      "Infelizmente você morreu e as forças das trevas conseguiram dominar o mundo. Obrigado por jogar!"
    );
  } else {
    document.getElementById("finalTexto").style.display = "block";
    if (final === 1) {
      finalTexto.innerHTML =
        "<div><h2 class='titulo'>A Orbe do Destino</h2>" +
        "<p>''Quando a Orbe do Destino se racha, toda a sua energia começa a vazar para dentro da sala. O evento cria um vortex de energia que rodopia em volta do pedestal com um pedaço da Orbe quebrada. Os soldados do templo são desintegrados, assim como os mercenários. Somente você e o cavaleiro Negro permanecem de pé.''</p><p>- Em sua ignorância você nos condenou! - o cavaleiro grita em meio a toda aquele turbilhão mágico. As quatro peças da orbe quebrada estão flutuando e rodopiando.</p><p>''Sem muitas opções você avança contra as peças quebradas e segura uma delas com a mão direita. Toda aquela energia é poderosa demais pra você e você sente o poder da Orbe tentando afastar seus fragmentos, mas o poder da Luz te sustenta e te ajuda a continuar empurrando o fragmento de volta para o lugar. Você empurra o fragmento com todas as suas forças e você vê mais três vultos em volta de você fazendo o mesmo, segurando um fragmento e o empurrando de volta para reconstruir o Orbe do Destino.''</p><p>''Quando os fragmentos se tocam uma luz amarela é emitida da Orbe e os fragmentos são unidos novamente. E esse é o final da história... Por hora.''</p>";
    }
    if (final === 2) {
      finalTexto.innerHTML =
        "<div><h2 class='titulo'>A Orbe do Destino</h2>" +
        "<p>''A espada do cavaleiro negro se choca contra a sua e por um momento sua lâmina parece que vai aguentar, mas você vê que ela trinca e está prestes a ser partida. Você empurra o cavaleiro para o lado e da um golpe em seu flanco, se afastando.''</p><p>''Como sua espada não é mais útil, o jeito é recorrer a outra. Você pega uma lâmina caída no chão e ergue as duas para encara-lo. O cavaleiro faz com que a energia escura que envolve sua lâmina se transformem em tentáculos sólidos, como se fossem uma lula, e eles disparam na sua direção para te agarar.''</p><p>''Você se posiciona atrás de um dos soldados do templo que é preso pelos tentáculos e então erguido no ar. Você aproveita a oportunidade e avança contra o cavaleiro negro, primeiro atacando com sua segunda lâmina e depois com a segunda. O cavaleiro é obrigado a desfazer os tentáculos de energia e usar a espada para se defender. VocÊ desfere um, dois, três ataques em sequência e o cavaleiro se mantém na defensiva. Por fim você faz um ataque com sua primeira espada e ele ataca de volta.''</p><p>''A força do golpe termina de quebrar a sua lâmina e o fragmento da espada vai de encontro ao Orbe do Destino. Quando a Orbe do Destino se racha, toda a sua energia começa a vazar para dentro da sala. O evento cria um vortex de energia que rodopia em volta do pedestal com um pedaço da Orbe quebrada. Os soldados do templo são desintegrados, assim como os mercenários. Somente você e o cavaleiro Negro permanecem de pé.''</p><p>- Em sua ignorância você nos condenou! - o cavaleiro grita em meio a toda aquele turbilhão mágico. As quatro peças da orbe quebrada estão flutuando e rodopiando.</p><p>''Sem muitas opções você avança contra as peças quebradas e segura uma delas com a mão direita. Toda aquela energia é poderosa demais pra você e você sente o poder da Orbe tentando afastar seus fragmentos, mas sua determinação te obriga a continuar empurrando o fragmento de volta para o lugar. Você empurra o fragmento com todas as suas forças e você vê mais três vultos em volta de você fazendo o mesmo, segurando um fragmento e os empurrando de volta para reconstruir o Orbe do Destino.''</p><p>''Quando os fragmentos se tocam uma luz amarela é emitida da Orbe e os fragmentos são unidos novamente. E esse é o final da história... Por hora.''</p>";
    }
    if (final === 3) {
      finalTexto.innerHTML =
        "<div><h2 class='titulo'>A Orbe do Destino</h2>" +
        "<p>''O corpo do cavaleiro negro cai no chão, sem vida. A lâmina da Dama da Noite está vermelha como sangue e você está satisfeito. Os soldados do templo e os mercenários param de lutar por um momento para observar o que você vai fazer.''</p><p>''Você aponta sua mão esquerda para a Orbe do Destino e seus tentáculos de sangue vão até lá e agarram a Orbe, trazendo-a para você. Os soldados do templo avançam para te atacar, mas quando a Orbe chega até a sua mão você dispara um pulso de energia amarela que faz com que eles sejam desativados. Os mercenários correm para fugir dali enquanto você aprecia seu prêmio.''</p><p>- Eu disse a você que cuidaríamos do mundo - a Dama da Noite fala em seu ouvido.</p><p>''Você ergue a Orbe e na sua frente a Dama da Noite é materializada em sua forma de mulher, desaparecendo da sua mão. 'Hora de cuidar do mundo', você diz a ela. Ela te responde com um sorriso e passa a mão pelo seu braço, te acompanhando para fora do templo.''</p>";
    }
  }
  console.log(energia, karma);
}
