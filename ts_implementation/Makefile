NAME		=	bitmap
SRCS		=	main.ts
DEST		=	main.js
CC			=	tsc
INCS		=	includes/

all:		$(NAME)

$(NAME):
	@$(CC) $(SRCS)
	@echo "You can now run the program, enjoy!"

clean:
	@rm -f $(DEST)

re:	clean all

run:
	@node $(DEST)

.PHONY:	all clean re
