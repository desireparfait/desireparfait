# 👋 Salut, moi c’est Parfait Touré  

💡 **Développeur Full Stack & Apprenant IA** passionné par la création d’applications web, mobiles et intelligentes.  
Je construis chaque jour des projets pour apprendre plus vite, résoudre des problèmes réels et évoluer vers un profil
complet mêlant **développement, data et intelligence artificielle.**

---

### 🧠 À propos de moi
- 🎓 Autodidacte en développement web, mobile et IA  
- 🌍 Basé en Côte d’Ivoire  
- ⚙️ Langages que j’apprends et pratique : **Python, JavaScript, TypeScript, PHP, SQL, Java, Dart**  
- 🧩 Frameworks & outils : **React, Next.js, Flutter, Express, Django, Flask, Laravel, MongoDB, MySQL, Docker**  
- 🔬 Intéressé par : **IA, automatisation, data, systèmes intelligents, DevOps**  
- 💭 Objectif : devenir un **développeur complet** capable de concevoir, optimiser et automatiser des applications performantes  
- 💼 J’aime : comprendre à fond, apprendre par la pratique, et partager mes découvertes

---

### 💻 Projets en cours
- 🧮 **Quiz Arena** — une application de quiz interactive  
- 🔢 **Calculatrice JavaScript** — interface et logique d’évaluation  
- 🧠 **IA Assistant Personnel** — expérimentation avec les API et modèles d’IA  

➡️ D’autres projets arrivent : APIs, apps mobiles, mini-IA, dashboards et automatisations.

---

### 🤝 Collaboration
Je cherche à collaborer sur :
- Des projets open-source en **web / mobile / IA**
- Des **outils éducatifs ou communautaires** autour du code
- Des projets qui permettent d’apprendre vite et d’évoluer techniquement

---

### 📫 Me contacter
- ✉️ Email : *toureparfait7@gmail.com*
- 💬 Discord : **parfait_dev**  
- 🧑‍💻 GitHub : [@desireparfait](https://github.com/desireparfait)

---

### ⚡ Fun fact
Je code tous les jours (même fatigué 😅), parce que **chaque ligne m’approche un peu plus de ma vision : créer, automatiser et inspirer.**

---

> _"Apprendre vite, coder juste, et toujours chercher à comprendre."_  
> — Parfait Touré 🚀


<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculatrice</title>
    <style>
      body {
        background: linear-gradient(red, blue);
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
      h1 {
        text-align: center;
      }
      input[type="text"] {
        width: 90%;
        padding: 12px;
        border: 1px solid #000;
        border-radius: 12px;
        font-size: 14px;
        margin-bottom: 10px;
        text-align: right;
        background-color: #000;
        color: #03ff03;
      }
      input[value="ON/OFF"] {
        background: red;
      }
      input[value="C"],
      input[value="B/S"],
      input[value="+"],
      input[value="-"],
      input[value="*"],
      input[value="/"] {
        background-color: orangered;
      }
      input[value="1"],
      input[value="2"],
      input[value="3"],
      input[value="4"],
      input[value="5"],
      input[value="6"],
      input[value="7"],
      input[value="8"],
      input[value="9"],
      input[value="0"],
      input[value="."] {
        background-color: rgba(45, 12, 233, 0.863);
      }
      input[value="="] {
        background-color: #27fa27;
        width: 125px;
      }
      form {
        background-color: white;
        width: 260px;
        height: 430px;
        border-radius: 20px;
        padding: 20px;
      }
      .btn {
        border-radius: 20px;
        width: 60px;
        height: 55px;
        text-align: center;
        margin-bottom: 5px;
        border: none;
      }
      .btn:hover {
        transform: scale(1.1);
        transition: 0.2s;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <form>
        <h1>CALCULATOR</h1>
        <input type="text" id="screen" disabled />
        <div>
          <input type="button" value="ON/OFF" class="btn" />
          <input type="button" value="C" class="btn" />
          <input type="button" value="B/S" class="btn" />
          <input type="button" value="-" class="btn" />
        </div>

        <div>
          <input type="button" value="7" class="btn" />
          <input type="button" value="8" class="btn" />
          <input type="button" value="9" class="btn" />
          <input type="button" value="+" class="btn" />
        </div>

        <div>
          <input type="button" value="4" class="btn" />
          <input type="button" value="5" class="btn" />
          <input type="button" value="6" class="btn" />
          <input type="button" value="/" class="btn" />
        </div>

        <div>
          <input type="button" value="1" class="btn" />
          <input type="button" value="2" class="btn" />
          <input type="button" value="3" class="btn" />
          <input type="button" value="*" class="btn" />
        </div>

        <div>
          <input type="button" value="0" class="btn" />
          <input type="button" value="." class="btn" />
          <input type="button" value="=" class="btn" />
        </div>
      </form>
    </div>

    <script defer>
      const screen = document.getElementById("screen");
      const buttons = document.querySelectorAll(".btn");

      let isOn = false;

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let value = button.value;

          if (value === "ON/OFF") {
            isOn = !isOn;
            screen.value = isOn ? "0" : "";
          } else if (isOn) {
            if (value === "C") {
              screen.value = "0";
            } else if (value === "B/S") {
              screen.value = screen.value.slice(0, -1) || "0";
            } else if (value === "=") {
              try {
                screen.value = eval(screen.value);
              } catch {
                screen.value = "error";
              }
            } else {
              if (screen.value === "0") screen.value = "";
              screen.value += value;
            }
          }
        });
      });
    </script>
  </body>
</html>
