import { Octokit } from 'octokit';

const octo = new Octokit({
   auth: process.env.PRIVATE_KEY
})

class GetGit {
   constructor(octo){
      this.octo = octo;
      this.rex = undefined;
      this.paws = undefined;
   }

   async getRex() {
      const rex = await this.octo.rest.repos.get({
         owner: "brandynh",
         repo: "ParksAndRex"
      });
      return this.rex = rex.data;
   }

   async getPaws() {
      const paws = await this.octo.rest.repos.get({
         owner: "MikeMallonIT",
         repo: "Project2-DaySpaw"
      })
      return this.paws = paws.data;
   }

}

export default new GetGit(octo);