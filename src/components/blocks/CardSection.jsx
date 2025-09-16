import CardText from "../ui/CardText";
import {CardTitle } from "../ui/data";
export default function CardSection() {
  return (
      <div className=" flex justify-between">
        <CardText {...CardTitle[0]} />
        <CardText {...CardTitle[1]} />
        <CardText {...CardTitle[2]} />
      </div>
  );
}