import TeamCard from "./TeamCard";
import teamCard from "../assets/images/teamCard.png";

const teams = [
  { id: 1, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 2, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 3, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 4, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 5, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 6, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 7, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 8, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 9, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 10, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 11, image: teamCard, name: "david drake", designation: "ui designer" },
  { id: 12, image: teamCard, name: "david drake", designation: "ui designer" },
];

const Teams = () => {
  return (
    <div className="container teams_container">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          image={team.image}
          name={team.name}
          designation={team.designation}
        />
      ))}
    </div>
  );
};

export default Teams;
