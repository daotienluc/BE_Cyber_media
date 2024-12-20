CREATE TABLE cars(
	car_id INT PRIMARY KEY AUTO_INCREMENT,
	--Tên xe
	name VARCHAR(255),
	--Mô tả
	description TEXT,
	--Số lượng hành khách
	passengers INT,
	--Tốc độ tối đa với thời gian tăng tốc
	max_speed VARCHAR(255),
	--Loại hộp số
	gearbox_type VARCHAR(255),
	--Loại nhiên liệu
	fuel_type VARCHAR(255),
	--Giá thuê mỗi ngày
	price_per_day DOUBLE,
	--Tỉ lệ giảm giá
	discount_percentage INT DEFAULT 0,
	--Url hình ảnh
	image_url VARCHAR(255),
	
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

INSERT INTO cars (name, description, passengers, max_speed, gearbox_type, fuel_type, price_per_day, discount_percentage, image_url)
VALUES
    ('Toyota Corolla', 'Compact car with great fuel efficiency.', 5, '180 km/h (0-100 km/h in 9 sec)', 'Automatic', 'Gasoline', 50.00, 10, 'https://example.com/images/toyota_corolla.jpg'),
    ('Honda Civic', 'Stylish and comfortable sedan.', 5, '200 km/h (0-100 km/h in 8 sec)', 'Automatic', 'Gasoline', 55.00, 15, 'https://example.com/images/honda_civic.jpg'),
    ('Tesla Model 3', 'Electric car with autopilot feature.', 5, '261 km/h (0-100 km/h in 3.5 sec)', 'Automatic', 'Electric', 120.00, 20, 'https://example.com/images/tesla_model_3.jpg'),
    ('Ford Explorer', 'Spacious SUV with advanced safety features.', 7, '210 km/h (0-100 km/h in 7.5 sec)', 'Automatic', 'Gasoline', 80.00, 5, 'https://example.com/images/ford_explorer.jpg'),
    ('BMW X5', 'Luxury SUV with powerful engine.', 5, '250 km/h (0-100 km/h in 5.5 sec)', 'Automatic', 'Diesel', 150.00, 0, 'https://example.com/images/bmw_x5.jpg'),
    ('Chevrolet Camaro', 'Sports car with aggressive styling.', 4, '300 km/h (0-100 km/h in 4 sec)', 'Manual', 'Gasoline', 200.00, 25, 'https://example.com/images/chevrolet_camaro.jpg'),
    ('Mercedes-Benz E-Class', 'Luxury sedan with premium features.', 5, '240 km/h (0-100 km/h in 6 sec)', 'Automatic', 'Diesel', 130.00, 10, 'https://example.com/images/mercedes_e_class.jpg'),
    ('Kia Soul', 'Compact crossover with unique design.', 5, '180 km/h (0-100 km/h in 10 sec)', 'Automatic', 'Gasoline', 45.00, 0, 'https://example.com/images/kia_soul.jpg'),
    ('Audi A6', 'Premium sedan with a sleek design.', 5, '250 km/h (0-100 km/h in 5 sec)', 'Automatic', 'Hybrid', 140.00, 12, 'https://example.com/images/audi_a6.jpg'),
    ('Jeep Wrangler', 'Off-road SUV with rugged capabilities.', 4, '160 km/h (0-100 km/h in 8 sec)', 'Manual', 'Gasoline', 90.00, 18, 'https://example.com/images/jeep_wrangler.jpg');




