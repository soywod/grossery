<template>
  <Layout>
    <h1>Products</h1>
    <table border="1" class="table" v-if="$page.allProducts.totalCount > 0">
      <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Stock</th>
      </thead>
      <tbody>
        <tr v-for="edge in $page.allProducts.edges" :key="edge.node.name">
          <td>{{ edge.node.name }}</td>
          <td>{{ edge.node.desc }}</td>
          <td>{{ edge.node.stock }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>No product yet!</div>
  </Layout>
</template>

<page-query>
query {
  allProducts {
    totalCount
    edges {
      node {
        name
        desc
        stock
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Products",
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
