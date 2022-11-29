# Projet logiciel collaboratif

Projet support pour la mise en place de bonnes pratiques de développement logiciel collaboratif : CI / CD (Intégration continue / Déploiement continu), Qualité du Code, Gitflow

## Gitflow

https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=git%2Dflow%20est%20un%20outil,ex%C3%A9cuter%20brew%20install%20git%2Dflow%20.

### Production

Depuis la branche locale _main_

- Création d'un nouveau commit :

`git commit -am"description du commit"`

- Envoi sur la branche _main_ du dépôt distant :

`git push -u origin main`

### Release

Depuis la branche _main_

- fusion d'une nouvelle feature de la branche approuvée sur la branche _main_ :
`git merge feature/nom-de-la-feature`

- création d'une nouvelle version de production :
`git tag -a v.1 -m"description de la version de release"`

- envoi sur la branche _main_ du dépôt distant :
`git push -u origin main`

- Gestion des tags : https://www.atlassian.com/fr/git/tutorials/inspecting-a-repository/git-tag#:~:text=La%20commande%20git%20tag%20est,m%C3%A9tadonn%C3%A9es%20suppl%C3%A9mentaires%20sur%20le%20tag.

### Développement

Depuis la branche locale _develop_

- Fusion d'une feature approuvée :
`git merge feature/nom-de-la-feature`

- Envoi sur la branche _develop_ du dépôt distant :
`git push -u origin develop`

### Feature

Depuis la branche _develop_

- création et basculement vers une nouvelle branche :
`git checkout -b feature/nom-de-la-feature`

- fusion d'une nouvelle feature de la branche approuvée sur la branche _develop_ :
`git merge feature/nom-de-la-feature`

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
