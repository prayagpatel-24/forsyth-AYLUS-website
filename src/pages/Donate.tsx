import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, FileText, CreditCard } from 'lucide-react';

const Donate = () => {
  const [showPayPalForm, setShowPayPalForm] = useState(false);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6 flex items-center justify-center space-x-2">
            <span>Make a Donation</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your generous support helps us expand our community impact and serve more families in need.
          </p>
        </div>
        {/* Donation Card */}
        <div className="max-w-3xl mx-auto mb-0">
          <Card className="bg-muted border-primary border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
                <DollarSign size={28} />
                <span>Support AYLUS Forsyth</span>
              </CardTitle>
              <p className="text-muted-foreground">
                All donations are tax-deductible. IRS Determination letter available upon request.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 501(c)(3) Status */}
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="text-primary" size={20} />
                  <h4 className="font-semibold text-foreground">Tax-Deductible Donations</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  AYLUS is a registered 501(c)(3) nonprofit organization.
                </p>
              </div>
              {/* PayPal Donation Section */}
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Donate via PayPal</h4>
                {!showPayPalForm ? (
                  <div className="flex flex-col items-center space-y-4">
                    <Button 
                      variant="cta" 
                      size="lg"
                      onClick={() => setShowPayPalForm(true)}
                      className="flex items-center space-x-2"
                    >
                      <CreditCard size={20} />
                      <span>Donate Now with PayPal</span>
                    </Button>
                    <div className="flex justify-center">
                      <a
                        href="https://gofund.me/ed286944"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <Button 
                          variant="cta" 
                          size="lg"
                          className="flex items-center space-x-2"
                        >
                          <CreditCard size={20} />
                          <span>Donate through GoFundMe</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-4">
                      PayPal donation form would be embedded here. 
                      Please contact us for direct donation information.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground">Contact for donation setup:</p>
                      <p className="text-sm text-muted-foreground">aylusforsythga@gmail.com</p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowPayPalForm(false)}
                      className="mt-4"
                    >
                      Back
                    </Button>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">
                  For questions about donations or to request our IRS Determination letter, 
                  please contact us at aylusforsyth@gmail.com
                </p>
              </div>
              {/* Alternative Donation Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Other Ways to Help</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sponsor specific events</li>
                    <li>• Donate supplies directly</li>
                    <li>• Corporate sponsorship opportunities</li>
                    <li>• In-kind donations</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Contact Information</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Email: aylusforsythga@gmail.com</p>
                    <p>President: parth.shah14@icloud.com</p>
                    <p>Follow us: @forsythaylus</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donate;
