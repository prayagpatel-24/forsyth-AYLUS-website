import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Instagram } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Us & Leadership</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about AYLUS Forsyth Branch and meet our leadership team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Mission Statement
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Chapter Mission Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  [Mission Statement Placeholder] - To be copied from existing website. 
                  Our mission is to empower youth through community service, fostering 
                  leadership skills and creating positive change in our community.
                </p>
              </CardContent>
            </Card> */}

            {/* Chapter Story */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Established in 2024, AYLUS Forsyth Branch represents the newest chapter 
                  in a growing movement of youth-led community service. Our branch has 
                  quickly grown to over 50 dedicated members committed to making a difference.
                </p>
              </CardContent>
            </Card>

            {/* National AYLUS Values */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">National AYLUS Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AYLUS promotes the development of its members LEADERSHIP, INTEGRITY, 
                  and INNOVATION, through the planning and execution of volunteer projects 
                  that aim at benefiting our communities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Leadership & Images */}
          <div className="space-y-8">
            {/* Leadership Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Leadership Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* President */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="./images/Parth_shah.jpg"
                        alt="Parth Shah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Parth Shah</h3>
                      <p className="text-primary font-medium">President [Co-Founder]</p>
                    </div>
                  </div>

                  {/* Vice President */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="./images/Rama Alla.jpg"
                        alt="Sakeeth Alla"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Saaketh Alla</h3>
                      <p className="text-primary font-medium">Vice President [Co-Founder]</p>
                    </div>
                  </div>

                  {/* Secretary */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="./images/Prayag_Patel.jpg"
                        alt="Prayag Patel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Prayag Patel</h3>
                      <p className="text-primary font-medium">Secretary [Co-Founder]</p>
                    </div>
                  </div>

                  {/* Reporter */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="./images/Moulik_Jain.jpg"
                        alt="Moulik Jain"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Moulik Jain</h3>
                      <p className="text-primary font-medium">Reporter</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Chapter Email</p>
                    <p className="text-muted-foreground">aylusforsythga@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">President</p>
                    <p className="text-muted-foreground">parth.shah14@icloud.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <Instagram className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground">@forsythaylus</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <a
                  href="https://groupme.com/join_group/104631973/KvkpCg9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="cta">
                    Get Involved
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;