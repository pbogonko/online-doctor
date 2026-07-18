async function getToken() {
  try {
      const response = await fetch('https://dev-8kpvcbobrymrrczb.us.auth0.com/oauth/token', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          "client_id":"7rrZbVeskJzaJuSbvAuPVVKzRxK0jdj4",
          "client_secret":"sKewp1gOLlHj1YhLNy4VEwGqVPAPsB8kXTT-oibIKTG0ge7tIhGwjbGtKMohhpse",
          "audience":"auth0-api",
          "grant_type":"client_credentials"
        }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching token:', error);
  }
}
export default getToken;