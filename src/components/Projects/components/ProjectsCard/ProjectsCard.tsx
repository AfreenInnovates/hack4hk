/* eslint-disable react/react-in-jsx-scope */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectCardsProp } from './types';
import { Avatar, AvatarImage } from '../../../ui/avatar';
import { Button } from '../../../ui/button';
import { useNavigate } from 'react-router-dom';
const ProjectsCard = ({ project }: ProjectCardsProp) => {
  const navigation = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row">
        <div className="flex -space-x-3">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://randomuser.me/api/portraits/men/83.jpg" />
          </Avatar>
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://randomuser.me/api/portraits/women/5.jpg" />
          </Avatar>
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://randomuser.me/api/portraits/men/79.jpg" />
          </Avatar>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
          <p>+3</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button className="w-full rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-700" onClick={() => navigation('/projects/project123')}>
          View Project
        </Button>
        <Button className="w-full rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-700">Request Enrollment</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
