# **Procédure de lancement du Backend (API) en local**
## **Pré-requis**
1. Installer Node.js dans son PC;
2. Avoir avoir MongoDB installé et opérationnel;
3. Avoir git installé et operationel;

## **Procédure**
1. Cloner ce répo avec la commande ``git clone https://github.com/Arol4/todo-api``;
2. Dans le répertoire courant du repertoire cloné, lancer la commande ``npm install``;
3. Dans le répertoire courant du repertoire cloné, créer un fichier .env avec le contenu ci-dessous:
```.env
    MONGO_URI=mongodb://localhost:27017
    JWT_SECRET=motdepasseultrasecret
    PORT=5000
```
4. Dans ce même répertoire, lancer la commande ``node index.js``;
L'api local est accessible avec l'adresse *http://localhost:5000*.