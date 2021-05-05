---
layout: post
title: Mi biblioteca favorita 
subtitle: Traffic, la biblioteca para tratar datos de navegación aérea
gh-repo: xoolive/traffic
gh-badge: [star, fork, follow]
tags: [test]
comments: true
---
## Introducción
En este primer post voy a hablar un poco sobre mi biblioteca favorita y la que más me ha servido en los dos últimos años de experiencia tanto académica como profesional. 
Esta biblioteca es Traffic(creada por Xavier Olive) y sirve para poder tratar datos [ADS-B](https://es.wikipedia.org/wiki/Sistema_de_Vigilancia_Dependiente_Autom%C3%A1tica) y de navegación aérea para tratarlos, modificarlos, representarlos y hacer casi todo lo que te venga en gana(puediendo añadir más funcionalidades a la biblioteca al ser esta de código abierto).
Los puntos fuertes de esta biblioteca se basan en la "relativa" sencillez para realizar cualquier clase de filtrado, cálculo geográfico o representación sin necesidad de tener que golpearte la cabeza con una API de más bajo nivel. Además, está basada en Pandas por lo que los datos en los que se basa cada objeto se pueden tratar directamente con los métodos de un DataFrame de Pandas. En resumidas cuentas:
* API de alto nivel para tratar con datos geográficos
* Basado en Pandas(y Numpy)
* Facilidad de realizar representaciones geográficas

Otro punto a favor de la biblioteca es que Xavier(el autor) tiene una gran paciencia y suele responder todos los issues o dudas sobre la biblioteca o el uso de sus recursos.

## Mi experiencia personal
Encontré esta biblioteca mientras miraba como obtener datos ADS-B de manera gratuita para la realización de mis prácticas en el departamento de SATAA de la UPM(ETSIAE). De primeras solo la utilicé para usar la interfaz que permitia descargar del servidor de datos históricos de [The Open Sky Network](https://opensky-network.org/), pero más tarde utilice muchos de sus recursos para calcular separaciones entre aeronaves, represtar clusteres de flujos de aeronaves y un largo etcertera de cosas.
Esta biblioteca me permitió realizar varias contribuciones al proyecto europeo [AISA](https://www.sesarju.eu/projects/aisa) y poder finalizar mis estudios de grado en la Universidad Politécnica de Madrid.
En cuanto de manera profesional, en mi actual empresa hemos utilizado esta biblioteca para realizar varios estuidos de ocupación de pistas en aeropuertos, cálculos de flujos de entrada y KPI's.
Si tuviera que decir algo que no me gusta nada sobre Traffic es que su instalación es un poco complicada y para la gente nueva en Python puede ser una epopeya su instalación si no se tiene cuidado. Eso es porque tiene dependecias con librerías dinámicas que no funcionan correctamente con ciertas versiones de Pandas o Python, pero Xavier ya esta implementando un target en conda-forge para que su instalación sea lo menos problemática posible.
Sobre sus ejemplos de uso, podría aburrios poniendo cientos de scripts que he usado para filtrar o generar pipelines de Machine Learning pero creo que los [ejemplo](https://traffic-viz.github.io/gallery.html) de representaciones gráficas que tiene la biblioteca son bastante chulos y dan un idea mejor sbre que puede hacer Traffic.
Finalmente comentar que si necesitas alguna pequeña ayuda de cómo usarla, siempre podeis contactarme por LinkedIn e intentaré ayudaros dentro de mis capaciades.

Jaime Bowen
Finalmente comentar que si necesitas alguna pequeña ayuda de cómo usarla, siempre podeis contactarme por LinkedIn e intentaré ayudaros dentro de mis capaciades.

Jaime Bowen 
