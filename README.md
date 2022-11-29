# Projet logiciel collaboratif

Projet support pour la mise en place de bonnes pratiques de développement logiciel collaboratif : CI / CD (Intégration continue / Déploiement continu), Qualité du Code, Gitflow

## Gitflow

https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=git%2Dflow%20est%20un%20outil,ex%C3%A9cuter%20brew%20install%20git%2Dflow%20.

### Production

Depuis la branche locale __main__ de l'environnement de production

- Récupération manuelle des mises à jour (sans CI/CD) :
`git pull`

- Passage d'une version de production à l'autre :
`git checkout <identifiant du tag>`

### Pré-Production

Depuis la branche locale __main__

- Envoi sur la branche __main__ du dépôt distant :

`git push -u origin main`

- fusion d'une nouvelle feature de la branche approuvée sur la branche __main__ :
`git merge feature/nom-de-la-feature`

- fusion d'une branche de correction approuvée sur la branche __main__ :
`git merge hotfix/nom-de-la-correction`

- création d'une nouvelle version de production :
`git tag -a v1 -m"description de la version de release"`

- envoi du tag sur le dépôt distant :
`git push v1 origin main`

- envoi sur la branche _main_ du dépôt distant :
`git push origin main`

- Gestion des tags : https://www.atlassian.com/fr/git/tutorials/inspecting-a-repository/git-tag#:~:text=La%20commande%20git%20tag%20est,m%C3%A9tadonn%C3%A9es%20suppl%C3%A9mentaires%20sur%20le%20tag.

### Correction

Depuis la branche locale __main__

- Création et basculement sur une branche de correction :

`git checkout -b hotfix/nom-de-la-correction`

### Développement

Depuis la branche locale __develop__

- Fusion d'une feature approuvée :
`git merge feature/nom-de-la-feature`

- Envoi sur la branche __develop__ du dépôt distant :
`git push origin develop`

### Feature

Depuis la branche __develop__

- création et basculement vers une nouvelle branche :
`git checkout -b feature/nom-de-la-feature`

- fusion d'une nouvelle feature de la branche approuvée sur la branche __develop__ :
`git merge feature/nom-de-la-feature`

Depuis la branche __feature/nom-de-la-feature__

- Création d'un nouveau commit :
`git commit -am"description du commit"`

## Qualité du code
https://sonarcloud.io

## Tests unitaires
https://jestjs.io/fr/

---
Alexandre Leroux

_Enseignant / Formateur_<br>
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

https://sherpa.one
