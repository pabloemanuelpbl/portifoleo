export interface Event {
    title: string;
    description: string;
}

export interface EventProps {
    events: Event[];
}

export default function Timeline({ events }: EventProps) {
    return (
      <div className="flex flex-col items-start space-y-8">
        <div className="relative ml-10">
          <div className="absolute left-0 w-1 bg-gray-300 h-full"></div>
  
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-center">
                <div className="absolute left-0 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  