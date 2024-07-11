import {createServer, hasMany, Model } from "miragejs";
export function makeServer({ environment = "test" }) {
  return createServer({
    models: {
      userSkill:Model,
      skill: Model.extend({
        userSkills: hasMany(),
      }),
    },
    seeds(server) {
      server.create()
    },
    routes() {
      this.namespace = "api";
      this.get("/user", () => {
        return {
          user: {
            id: 1,
            firstname: "richard",
            lastname: "tsang",
            roles: [{ id: 1, name: "frontend developer" }],
            contact: [{ id: 1, type: "email", value: "richardtcfung" }],
          },
        };
      });
      this.get("/user/skills", () => {
        return {
          userSkills: [
            { id: 1, name: "HTML", sid: 1 },
            { id: 2, name: "JavaScript", sid: 1 },
            { id: 3, name: "CSS", sid: 1 },
            { id: 4, name: "SCSS", sid: 1 },
            { id: 5, name: "ReactJS", sid: 2 },
            { id: 6, name: "NextJS", sid: 2 },
            { id: 7, name: "Bootstrap", sid: 2 },
            { id: 8, name: "Figma", sid: 3 },
            { id: 9, name: "Gimp", sid: 3 },
            { id: 10, name: "Adobe XD", sid: 3 },
            { id: 11, name: "React Native", sid: 4 },
            { id: 12, name: "Expo", sid: 4 },
            { id: 13, name: "GitLab", sid: 5 },
            { id: 14, name: "GitHub", sid: 5 },
            { id: 15, name: "Vite", sid: 6 },
            { id: 16, name: "Gulp", sid: 6 },
          ],
        };
      });
      this.get("/skills", () => {
        return {
          skills: [
            {
              sid: 1,
              name: "Web Coding Languages",
            },
            {
              sid: 2,
              name: "Web Frameworks/Libraries ",
            },
            {
              sid: 3,
              name: "Design Tool",
            },
            {
              sid: 4,
              name: "App Frameworks",
            },
            {
              sid: 5,
              name: "Version Control",
            },
            {
              sid: 6,
              name: "Dev/Build Tool",
            },
          ],
        };
      });
    },
  });
}
