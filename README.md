# Authentication-3
Authentication-3

API-GAMES

<table>
<tr>
<td><strong>USER´S</strong></td>
</tr>
<tr>
<td><strong>ID</strong></td>
<td>type: Generado por Mongo</td>
</tr>
<tr>
<td><strong>Username</strong></td>
<td>type: String, unique: true</td>
</tr>
<tr>
<td>ID</td>
<td>Generado por Mongo</td>
</tr>
<tr>
<td>ID</td>
<td>Generado por Mongo</td>
</tr>
<tr>
<td>ID</td>
<td>Generado por Mongo</td>
</tr>
</table>

user

email - string unique
password string
emoji string
games - [id-game]

game

id - generado por mongo
title string unique
cover string [cloudinary middleware]
date string
platform enum[pc,ps,xbox, nintendo]
creador - [id-creator]
description string

creator

id - generado por mongo
name - string
games - [id-game]
photo - string, [cloudinary middleware]

app -> info abierta

tipo - enum[free, free-premium, premium,]
coste enum[0,2,5]
