type Cv = {
  uuid: string;
  uuidUser: string;
  templateName: string;
  information: {
    name: string;
    photoUrl: string;
    competence: Array<string>;
    experience: Array<string>;
    scolarship: Array<string>;
    language: Array<string>;
  }
};

export default Cv;