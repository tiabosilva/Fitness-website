import TrainersStat from './TrainersStat';
import DurationStat from './DurationStat';
import CaloriesStat from './CaloriesStat';

const StatsGrid = () => {
  return (
    <div className="relative h-[500px] max-w-lg ml-auto">
      <div className="absolute top-0 right-0">
        <TrainersStat />
      </div>
      <div className="absolute top-32 right-32">
        <DurationStat />
      </div>
      <div className="absolute bottom-0 right-8">
        <CaloriesStat />
      </div>
    </div>
  );
};

export default StatsGrid;