class GitHub {
    constructor(){
        this.client_id = '958dd19728f912e2a224';
        this.client_secret = '74d8f8b4ab5cb8f79c20630f48aeee412567f888';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
        profile,
        repos
    }
}    
}