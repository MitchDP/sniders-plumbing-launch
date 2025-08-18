import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Service Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving Eugene and nearby communities with reliable plumbing services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
            {/* Map Placeholder */}
            <div className="aspect-video bg-muted/20 relative flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Eugene, OR & Surrounding Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We proudly serve Eugene and the surrounding communities in Lane County.
                </p>
                <a 
                  href="https://www.google.com/maps/place/Sniders+Plumbing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
            
            {/* Service Area Info */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Eugene</h4>
                  <p className="text-sm text-muted-foreground">Downtown, South Eugene, West Eugene, North Eugene</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Springfield</h4>
                  <p className="text-sm text-muted-foreground">Residential & commercial properties</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Surrounding Areas</h4>
                  <p className="text-sm text-muted-foreground">Coburg, Junction City, Creswell & more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;