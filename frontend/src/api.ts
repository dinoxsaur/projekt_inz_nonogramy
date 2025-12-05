export async function testApi() {
    const response = await fetch("http://127.0.0.1:8000/api/test/");
    return response.json();
}