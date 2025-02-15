import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/layout/ui/card';
import { Button } from '@/components/layout/ui/button';
import { Users, GraduationCap, Target } from 'lucide-react';

const CommunityInteractionPage = () => {
    const features = [
        {
            title: 'Study Rooms',
            description: 'Join virtual study rooms to collaborate with peers in real-time.',
            icon: <Users className="w-6 h-6 text-blue-400" />,
            buttonText: 'Join Study Rooms',
        },
        {
            title: 'Mentorship',
            description: 'Connect with experienced mentors for guidance and personalized advice.',
            icon: <GraduationCap className="w-6 h-6 text-green-400" />,
            buttonText: 'Find a Mentor',
        },
        {
            title: 'Group Challenges',
            description: 'Participate in group challenges to test and improve your skills.',
            icon: <Target className="w-6 h-6 text-yellow-400" />,
            buttonText: 'Join Challenges',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Community Interaction</h1>
                    <p className="text-gray-400">Engage with peers, mentors, and exciting challenges to enhance your learning experience.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardHeader className="flex flex-col items-center text-center">
                                {feature.icon}
                                <CardTitle className="mt-4 text-xl font-bold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">{feature.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900">
                                    {feature.buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommunityInteractionPage;
