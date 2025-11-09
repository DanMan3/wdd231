export default async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const text = await response.text().catch(() => '');
            throw new Error(`HTTP ${response.status} ${response.statusText} ${text}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('apiFetch error:', err);
        throw err;
    }

}