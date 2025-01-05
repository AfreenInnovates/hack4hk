/* eslint-disable react/react-in-jsx-scope */
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NetworkCardProps } from './types';

const badges = ['React JS', 'Problem Solving', 'Frontend Development', 'Backend Development'];

const NetworkCard = ({ network }: NetworkCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://randomuser.me/api/portraits/men/79.jpg" />
        </Avatar>
        <CardTitle>{network.name}</CardTitle>
        <CardDescription>About me</CardDescription>
      </CardHeader>
      <CardContent>
        {badges.map((badge, i) => (
          <Badge key={i} className="m-1">
            {badge}
          </Badge>
        ))}
        <Badge className="m-1">+3</Badge>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button className="w-full rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-700">
          <MessageCircle size={24} color="white" />
          Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NetworkCard;
