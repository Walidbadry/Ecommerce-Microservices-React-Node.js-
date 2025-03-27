resource "aws_db_instance" "rds" {
  allocated_storage    = 20
  engine              = "mysql"  # Change to "postgres" for PostgreSQL
  engine_version      = "8.0"    # Change to a PostgreSQL version if needed
  instance_class      = "db.t3.micro"
  identifier         = "ecommerce-db"
  username           = "admin"
  password           = "password123"  # Change this securely!
  publicly_accessible = false
  skip_final_snapshot = true

  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
}

# Subnet Group for RDS
resource "aws_db_subnet_group" "main" {
  name       = "main"
  subnet_ids = [aws_subnet.subnet1.id, aws_subnet.subnet2.id]

  tags = {
    Name = "Main DB subnet group"
  }
}

# Security Group for RDS
resource "aws_security_group" "rds_sg" {
  name        = "rds-security-group"
  description = "Allow database access"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 3306  # Change to 5432 for PostgreSQL
    to_port     = 3306  # Change to 5432 for PostgreSQL
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]  # Restrict access to VPC
  }
}

output "rds_endpoint" {
  value = aws_db_instance.rds.endpoint
}
