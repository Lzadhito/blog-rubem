package graph

import "github.com/Lzadhito/blog-rubem/apps/backend/graph/model"

//go:generate go run github.com/99designs/gqlgen

type Resolver struct {
	articles []*model.Article
}
