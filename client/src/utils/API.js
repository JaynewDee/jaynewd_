import { Octokit } from 'octokit';


export class GetProject {
    constructor() {
        this.octo = new Octokit({
            auth: process.env.PRIVATE_KEY
        }).rest.repos
    }

    async dino() {
        return await this.octo.get({
            owner: 'brandynh',
            repo: 'ParksAndRex'
        }).then((data) => data.data)
    }
}