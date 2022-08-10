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
<td><strong>Password</strong></td>
<td>type: String</td>
</tr>
<tr>
<td><strong>Emoji</strong></td>
<td>type: String</td>
</tr>
<tr>
<td><strong>Games</strong></td>
<td>Objet Id [id-game]</td>
</tr>
</table>

<table>
<tr>
<td><strong>GAME</strong></td>
</tr>
<tr>
<td><strong>ID</strong></td>
<td>type: Generado por Mongo</td>
</tr>
<tr>
<td><strong>Title</strong></td>
<td>type: String, unique: true</td>
</tr>
<tr>
<td><strong>Cover</strong></td>
<td>type: String [Cloudinary, middleware]</td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>type: String</td>
</tr>
<tr>
<td><strong>Platform</strong></td>
<td>enum[pc,ps,xbox, nintendo]</td>
</tr>
<tr>
<td><strong>Creator</strong></td>
<td>Object ID [id-creator]</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>type: String</td>
</tr>
</table>


<table>
<tr>
<td><strong>GAME</strong></td>
</tr>
<tr>
<td><strong>ID</strong></td>
<td>type: Generado por Mongo</td>
</tr>
<tr>
<td><strong>Name</strong></td>
<td>Object ID [id-game]</td>
</tr>
<tr>
<td><strong>Photo</strong></td>
<td>type: String [Cloudinary, middleware]</td>
</tr>
<tr>
<td><strong>Games</strong></td>
<td>Object ID [id-game]</td>
</tr>
</table>


