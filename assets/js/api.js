async function fecthProfileData(){
    const url = 'https://raw.githubusercontent.com/Tales-Nunes/Portfolio-Tales/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}