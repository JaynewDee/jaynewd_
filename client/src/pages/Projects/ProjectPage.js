import React from "react";

const redirect = (e) => {
  window.open(e.target.value, "_blank");
};

const ProjectPage = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        <div>Loading, please wait ...</div>
      ) : (
        <>
          <h3 id={data.id}>| {data.name} |</h3>
          <button value={data.html_url} onClick={(e) => redirect(e)}>
            Git Repo
          </button>
          <button
            value={data.clone}
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(e.target.value).catch((err) => {
                console.error(err);
              });
            }}
          >
            Copy Clone URL
          </button>
          <p>
            Primary Language: <span>{data.language || "Loading..."}</span>
          </p>
          <p>
            Date Created:{" "}
            <span>{new Date(data.created_at).toLocaleString() || "Loading..."}</span>
          </p>
          <p>
            Last Updated:{" "}
            <span>{new Date(data.updated_at).toLocaleString() || "Loading..."}</span>
          </p>
          <p>
            License: <span>{data.license ? data.license.spdx_id : "Unknown"}</span>
          </p>
          <section>
            <p>
              so cat jumps and falls onto the couch purrs and wakes up in a new
              dimension filled with kitty litter meow meow yummy there is a
              bunch of cats hanging around eating catnip but eat grass, throw it
              back up murder hooman toes. Walk on a keyboard attack feet catch
              eat throw up catch eat throw up bad birds. Drool ð•„ð”¼ð•†ð•Ž.
              Scratch the furniture push your water glass on the floor this cat
              happen now, it was too purr-fect!!!
            </p>
            <p>
              or ask for petting or scratch the box what a cat-ass-trophy!.
              Stare at the wall, play with food and get confused by dust eat a
              plant, kill a hand. Skid on floor, crash into wall attack like a
              vicious monster or throw down all the stuff in the kitchen i want
              to go outside let me go outside nevermind inside is better do
              doodoo in the litter-box, clickityclack on the piano, be
              frumpygrumpy.
            </p>
            <p>
              Pounce on unsuspecting person scratch at door to be let outside,
              get let out then scratch at door immmediately after to be let back
              in, humans,humans, humans oh how much they love us felines we are
              the center of attention they feed, they clean but chase red laser
              dot going to catch the red dot today going to catch the red dot
              today walk on keyboard yet mrow. I just saw other cats inside the
            </p>
            <p>
              house and nobody ask me before using my litter box bite off
              human's toes lick left leg for ninety minutes, still dirty. Cats
              go for world domination under the bed annoy owner until he gives
              you food say meow repeatedly until belly rubs, feels good but
              behind the couch toilet paper attack claws fluff everywhere meow
              miao french ciao litterbox or bleghbleghvomit my furball really
              tie the room together. Sun bathe x or when in doubt, wash. Hiss
              and stare at nothing then run suddenly away sleeping in the box
              but bite nose of your human.
            </p>
          </section>
        </>
      )}
    </>
  );
};

export default ProjectPage;
