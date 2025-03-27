# EKS Cluster
resource "aws_eks_cluster" "eks" {
  name     = "ecommerce-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = [aws_subnet.subnet1.id]
  }
}
