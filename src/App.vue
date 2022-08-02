

<template>
 <section>
  <header>
    <h2>Vue blog</h2>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  </header>
  <main>
    <router-view/>
  </main>
 </section>
</template>

<style scoped>

header {
  width: 100%;
  background: #00b0ff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
nav {
  width: 30%;
}
nav ul {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}
a {
  color: white;
}
.router-link-active {
  color: red;
}
</style>