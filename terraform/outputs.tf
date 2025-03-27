# Outputs
output "eks_cluster_name" {
  value = aws_eks_cluster.eks.name
}

output "ecr_repository_url" {
  value = aws_ecr_repository.ecommerce_repo.repository_url
}

output "rds_endpoint" {
  value = aws_db_instance.rds.endpoint
}

output "jenkins_public_ip" {
  value = aws_instance.jenkins.public_ip
}
