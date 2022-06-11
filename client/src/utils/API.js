import { Octokit } from 'octokit';

const octo = new Octokit({
   auth: process.env.PRIVATE_KEY
})

class GetGit {
   constructor(octo){
      this.octo = octo;
   }
   async getRex() {
      const rex = await this.octo.rest.repos.get({
         owner: "brandynh",
         repo: "ParksAndRex"
      });
      console.log(rex.data)
      return rex.data;
   }
   async getPaws() {
      const paws = await this.octo.rest.repos.get({
         owner: "MikeMallonIT",
         repo: "Project2-DaySpaw"
      })
      return paws.data;
   }
}

export default new GetGit(octo);