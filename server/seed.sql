CREATE TABLE IF NOT EXISTS categories(
  "id" SERIAL PRIMARY KEY,
  "cat_name" TEXT
);

CREATE TABLE IF NOT EXISTS messages (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255),
  "cat_name" TEXT,
  "message" TEXT,
  "cat_id" INTEGER,
  FOREIGN KEY ("cat_name") REFERENCES categories ("cat_name")
);


INSERT INTO messages (username, cat_name, message) 
VALUES 
('Theo Reeves', 'Silverstone - UK', 'Such a great event, always a good laugh! Racing is competitive and the crowd goes wild. "Through goes Hamiltoooonnnn"'),
('Theo Reeves', 'Interlagos - Brazil', 'Its always amazing here!, such a good event but can be super hot so bring your suncream!'),
('Theo Reeves', 'Suzaka - Japan', 'This track is easily one of the best, everyone is so respectful and the food is as good as the racing! Come on Yuki!!'),
('Theo Reeves', 'Circuit De Monaco - Monaco', 'Used to be such good racing but the regulation have ruined this track, the harbour is amazing though'),
('Theo Reeves', 'Red Bull Ring - Austria', 'Orange army unite here, racing is always on point! Max is a beast here, Red Bull for the win!'),
('Theo Reeves', 'Monza - Italy', 'Home of pizza and Ferrari, best 2 things to enjoy on holiday. I want to see Leclercs puppy'),
('Theo Reeves', 'Marina Bay - Singapore', 'The best street circuit in F1 by far, the heat is worth putting up with for the drama you get in the races!'),
('Theo Reeves', 'Yas Marina  - Abu Dhabi', 'Last race of the season, usually always has some drama.. Great race to get photos with your favourite drivers!!!'),
('Manny O', 'Circuit de Barcelona-Catalunya - Spain', 'My home race! I love to come, the atmosphere is amazing and the biscuits they sell are amazing!'),
('Theo Reeves', 'Albert Park - Australia', 'Letsss go Piastri and Danny Ric, hopefully you will both be on the podium!')

INSERT INTO categories (cat_name)
VALUES 
('Choose Track'),
('Silverstone - UK'),
('Interlagos - Brazil'),
('Suzaka - Japan'),
('Circuit De Monaco - Monaco'),
('Red Bull Ring - Austria'),
('Monza - Italy'),
('Marina Bay - Singapore'),
('Yas Marina  - Abu Dhabi'),
('Circuit de Barcelona-Catalunya - Spain'),
('Albert Park - Australia');


