document.addEventListener("DOMContentLoaded", function () {
    const wheelCanvas = document.getElementById("wheel");
    const selectedElement = document.getElementById("selected-element");
    const namesTextarea = document.getElementById("names");
    const spinBtn = document.getElementById("spin-btn");
    const editBtn = document.getElementById("edit-btn");

    let elements = [];
    let lastSelectedIndex = -1;
    let rotationAngle = 0;

    spinBtn.addEventListener("click", spinWheel);
    wheelCanvas.addEventListener("click", spinWheel);
    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            spinWheel();
        } else if (event.key === "s" || event.key === "S") {
            hideLastSelected();
        } else if (event.key === "e" || event.key === "E") {
            enableEditing();
        }
    });

    editBtn.addEventListener("click", enableEditing);

    function spinWheel() {
        if (elements.length === 0) {
            updateElements();
        }

        const selectedIndex = getRandomIndex();
        displaySelectedElement(selectedIndex);
        lastSelectedIndex = selectedIndex;

        const spinAngle = (360 / elements.length) * selectedIndex;
        rotationAngle += spinAngle;

        wheelCanvas.style.transform = `rotate(${rotationAngle}deg)`;
    }

    function hideLastSelected() {
        if (lastSelectedIndex !== -1) {
            elements[lastSelectedIndex].style.display = "none";
        }
    }

    function enableEditing() {
        namesTextarea.disabled = false;
        namesTextarea.focus();
    }

    function updateElements() {
        elements = [];
        const names = namesTextarea.value.split("\n");

        for (let i = 0; i < names.length; i++) {
            const element = document.createElement("div");
            element.innerText = names[i];
            elements.push(element);
        }

        renderWheel();
    }

    function renderWheel() {
        const context = wheelCanvas.getContext("2d");
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
        const angle = (2 * Math.PI) / elements.length;

        context.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

        for (let i = 0; i < elements.length; i++) {
            const sectorStartAngle = i * angle + rotationAngle * (Math.PI / 180);
            const sectorEndAngle = (i + 1) * angle + rotationAngle * (Math.PI / 180);

            // Dibujar sector en el canvas
            context.beginPath();
            context.moveTo(wheelCanvas.width / 2, wheelCanvas.height / 2);
            context.arc(
                wheelCanvas.width / 2,
                wheelCanvas.height / 2,
                wheelCanvas.width / 2,
                sectorStartAngle,
                sectorEndAngle
            );
            context.fillStyle = colors[i % colors.length];
            context.fill();
            context.stroke();

            // Posicionar el nombre en el centro del sector
            const centerX = (sectorStartAngle + sectorEndAngle) / 2;
            const centerY = wheelCanvas.height / 2 - 10; // Ajuste vertical para centrar
            context.save();
            context.translate(centerX, centerY);
            context.rotate(centerX + Math.PI / 2); // Ajustar la rotación
            context.fillStyle = "white"; // Color del texto
            context.font = "12px Arial"; // Tamaño y fuente del texto
            context.textAlign = "center";
            context.fillText(elements[i].innerText, 0, 0);
            context.restore();
        }
    }

    function displaySelectedElement(index) {
        hideLastSelected();
        elements[index].style.display = "block";
        selectedElement.innerText = `Elemento Seleccionado: ${elements[index].innerText}`;
    }

    function getRandomIndex() {
        return Math.floor(Math.random() * elements.length);
    }
});
