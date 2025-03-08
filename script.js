function showLoading(nextScreen) {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('formScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';

    const messages = [
        "✨ Un momento... algo especial está en camino. ✨",
        "💖 Preparando algo hermoso para ti... 💖",
        "🌸 Cargando una sorpresa llena de amor y alegría... 🌸",
        "💫 Espera un instante... lo mejor está por venir. 💫"
    ];

    let messageIndex = 0;
    const suspensionText = document.getElementById('suspensionText');

    function updateMessage() {
        suspensionText.innerText = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    updateMessage();
    const interval = setInterval(updateMessage, 3000);

    setTimeout(() => {
        clearInterval(interval);
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById(nextScreen).style.display = 'block';
    }, 6000);
}

function generateCard() {
    const nombre = document.getElementById('nombre').value.trim();
    const parentesco = document.getElementById('parentesco').value;

    if (!nombre) {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    const mensajes = {
        "Mamá": `${nombre}, querida Madre, hoy es un día especial porque celebro a la mujer más increíble que conozco: tú, mi mamá. No hay palabras suficientes para agradecerte por cada sacrificio, cada consejo y cada abrazo que me ha dado fuerzas cuando más lo he necesitado. Eres mi ejemplo de amor, valentía y ternura. Feliz Día de la Mujer, mamá. Te amo con todo mi corazón❤️.`,
        "Hermana": `${nombre}, hola mi niña hermosa, en este Día de la Mujer quiero recordarte lo valiosa que eres. Has sido mi cómplice, mi amiga y mi apoyo en cada momento de la vida. Tu fuerza, tu alegría y tu amor hacen del mundo un lugar mejor. Espero que algún día puedas mejorar mucho tu carácter y relación conmigo. Gracias por estar siempre ahí. Feliz Día de la Mujer, te amo muchísimo mi niña❤️.`,
        "Prima": `${nombre}, prima de mi corazón, pese a la distancia que hemos tenido estos últimos años hoy celebro la maravillosa mujer que eres. No solo eres mi prima, sino también una persona especial que ilumina la vida de quienes te rodean. Que este día te recuerde lo fuerte, increíble y valiosa que eres. Te quiero mucho mami❤️, (Espero poder verte pronto).`,
        "Tía": `${nombre}, querida tía, hoy quiero honrarte y agradecerte por ser una mujer tan increíble. Tu cariño, tu sabiduría y tu apoyo han sido un regalo en mi vida. Que este Día de la Mujer esté lleno de amor y felicidad, porque lo mereces todo. ¡Feliz día tía! Te quiero mucho❤️.`,
        "Novia": `${nombre}, mi amor, mi negra hermosa, en este Día de la Mujer quiero recordarte lo especial que eres para mí. Eres la persona que ilumina mis días, la que con su sonrisa transforma cualquier momento en algo mágico. Admiro tu fortaleza, tu ternura y la belleza que llevas en el alma. Gracias por ser la mujer increíble que eres. Te amo infinitamente. ¡Feliz Día de la Mujer Friky Mory❤️!`,
        "Mejor amiga": `${nombre}, hola mami, hermana de otra madre, en este Día de la Mujer quiero agradecerte por ser esa amiga incondicional, la que me apoya en los momentos en los que puedo necesitar ese impulso para mejorar y por nunca olvidar nuestra amistad. Tu luz, tu fortaleza y tu alegría son un regalo para el mundo, para mí y para cada uno de tus seres queridos. ¡Feliz Día de la Mujer, nunca olvides lo valiosa que eres! Te quiero mucho mi niña ❤️.`
    };

    // Si no hay un mensaje definido para el parentesco seleccionado, evita continuar
    if (!(parentesco in mensajes)) {
        alert("Por favor, selecciona un parentesco válido.");
        return;
    }

    const mensaje = mensajes[parentesco];

    document.getElementById('formScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('cardScreen').style.display = 'block';
        document.getElementById('cardTitle').innerText = `Para mi querida ${parentesco}`;
        document.getElementById('cardTitle').style.color = "#ff4081";
        document.getElementById('cardMessage').innerText = mensaje;
    }, 6000);
}

function printCard() {
    window.print();
}
