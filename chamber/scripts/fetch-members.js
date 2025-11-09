
export default async function fetchandRenderMembers(dataUrl) {
    try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const json = await res.json();

        const companies = Array.isArray(json)
            ? json
            : (Array.isArray(json.companies) ? json.companies : []);

        return companies;
    } catch (err) {
        console.error(err);
        return [];
    }
}

