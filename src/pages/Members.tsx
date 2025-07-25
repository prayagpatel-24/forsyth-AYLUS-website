import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Mail } from 'lucide-react';

const Members = () => {
  // Sample member names - replace with actual member data
  const members = [
    'Aaditya Nadagouda', 'Aarnav Ravi', 'Aarush Yeruva', 'Abyudhay Prabhu', 'Aditi Singh', 'Advay', 'Advay Pradeep', 'Akshath Ganji', 'Anish Vanka', 'anvi', 'Arnav Balaji', 'Avik Gupta', 'Caleb Stair', 'Catherin Antony', 'Evelin', 'Guna Ekkaluri', 'Harshit Chandrapati', 'Harshith', 'Hasith Vojjala', 'Ishita Jain', 'Jarissa Valdez', 'Jonathan Eskew', 'Kenneth Low', 'Kirtan Reddy Pingali', 'Likhitha', 'Long Le', 'Mahi Shah', 'Manav Jain', 'Maya Patel', 'Meetu Sharma', 'Moulik Jain', 'Navi Weliwita', 'Neya', 'Nicholas Crane', 'Nicolas Sasaki', 'Om Biradar', 'Parisha Goyal', 'Parth G', 'Parth S.', 'Pavan Malladi', 'Prasanna Manoharan', 'Prayag Patel', 'Reya Chigulapalli', 'Riddhima', 'rithikha', 'Saharsh Enabothula', 'Sahas Etikyala', 'Sal Minniti', 'shanvi hari', 'Shubham Joshi', 'Soumil Ishaank Simha Banala', 'Soumith Kondamadugula', 'Tanush Sharma', 'Tanvi Cholleti', 'Varad Valike', 'Vedanth Chirravuri', 'Vishnu Tadipatri', 'Vyom Mohan'
  ].map(name =>
    name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ')
  );

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Our Members</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Meet our dedicated team of 50+ volunteers making a difference in Forsyth County
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Users className="text-primary" size={24} />
            <span className="text-2xl font-semibold text-primary">{members.length} Active Members</span>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {members.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {member.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground">{member}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Join AYLUS Forsyth</CardTitle>
              <p className="text-lg text-muted-foreground">
                Ready to make a difference in your community? Join our growing team of volunteers!
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Why Join?</h3>
                  <ul className="text-muted-foreground space-y-2 text-left">
                    <li>• Develop leadership skills</li>
                    <li>• Build your resume with volunteer hours</li>
                    <li>• Make lasting friendships</li>
                    <li>• Create positive community impact</li>
                    <li>• Gain valuable experience</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">How to Join</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>Ready to get started? Reach out to us through:</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="text-primary" size={20} />
                      <span>aylusforsythga@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Member Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-center">Community Impact</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Work alongside passionate peers to create meaningful change in Forsyth County 
                through organized service projects and community initiatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-center">Skill Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Develop leadership, teamwork, and project management skills while organizing 
                and participating in various community service activities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-center">Recognition</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Receive volunteer hours documentation, leadership certificates, and recognition 
                for your community service contributions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Members;