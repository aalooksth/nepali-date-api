export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/test-worker") {
      return new Response("Worker is alive!");
    }
    return env.ASSETS.fetch(request);
  }
}
