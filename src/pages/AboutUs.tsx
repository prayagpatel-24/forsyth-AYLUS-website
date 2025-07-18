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
            {/* Mission Statement */}
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
            </Card>

            {/* Chapter Story */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Established in 2024</strong>, AYLUS Forsyth Branch represents 
                  the newest chapter in a growing movement of youth-led community service. 
                  Our branch has quickly grown to become a vital part of the Forsyth County 
                  community service ecosystem.
                </p>
                <p className="text-muted-foreground">
                  In our short time, we've recruited over 50 dedicated members and organized 
                  9 successful community service events, making a tangible impact on our 
                  local community through park cleanups, charity drives, and educational initiatives.
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
                  [National AYLUS Values Placeholder] - Values content will be added later. 
                  This section will highlight the core principles that guide all AYLUS chapters 
                  nationwide in their community service efforts.
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
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">PS</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Parth Shah</h3>
                      <p className="text-primary font-medium">President</p>
                    </div>
                  </div>

                  {/* Vice President */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">SA</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Sakeeth Alla</h3>
                      <p className="text-primary font-medium">Vice President</p>
                    </div>
                  </div>

                  {/* Secretary */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">PP</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Prayag Patel</h3>
                      <p className="text-primary font-medium">Secretary</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop"
                alt="Community service activity"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop"
                alt="Volunteer work"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop"
                alt="Team collaboration"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=200&fit=crop"
                alt="Community impact"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
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
                    <p className="text-muted-foreground">aylusforsyth@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">President</p>
                    <p className="text-muted-foreground">parthshahofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <Instagram className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground">@aylusforsyth</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button variant="cta">
                  Get Involved
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;