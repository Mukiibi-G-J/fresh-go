
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey



class Category(MPTTModel):
    name = models.CharField(
        verbose_name=_('Category Name'),
        help_text=_('Required and unique'),
        max_length=225,
        unique=True
    )
    slug = models.SlugField(verbose_name=_('Category safe URL'), max_length=255, unique=True)
    parent = TreeForeignKey("self", on_delete=models.CASCADE, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    
    class MPTTMeta:
        order_insertion_by=['name']
    
    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')
        db_table="Category"

    
    def get_absolute_url(self):
        return reverse('store:category_list', args=[self.slug])
    
    def __str__(self):
        return self.name


class ProductType(models.Model):
    
    
    name = models.CharField(_('Product Name'), max_length=225, help_text=_('Required'))
    is_active = models.BooleanField(default=True)
    
    
    class Meta:
        verbose_name = _('Product Type')
        verbose_name_plural = _('Product Types')
        db_table="ProductType"
    
    
    def __str__(self):
        return self.name
    
    
    
class ProductSpecification(models.Model):
    product_type = models.ForeignKey(ProductType , on_delete=models.RESTRICT)  
    name = models.CharField(verbose_name=_('Name'), max_length=255, help_text=_('Required'))  
    
    class Meta:
        verbose_name=_('Product Specification')
        verbose_name_plural=_('Product Specifications')
        db_table="ProductSpecification"
        
    def __str__(self):
        return self.name
    

class Product(models.Model):
    product_type = models.ForeignKey(ProductType , on_delete=models.RESTRICT)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    title = models.CharField(verbose_name=_('Title'), max_length=255, help_text=_('Required'))
    slug = models.SlugField(max_length=255)
    description = models.CharField(verbose_name=_('Description'), max_length=255, help_text=_('Not required'), blank=True)
    regular_price = models.DecimalField( verbose_name=_('Regular Price'), help_text=_('Maximum 999.99'), 
                                        error_messages={
                                            "name":{
                                                'max_length':_("The price must be between o and 999.999."),
                                            },
                                        }, 
                                        max_digits=8,
                                        decimal_places=0,
                                        )
    discount_price = models.DecimalField( verbose_name=_('Discount Price'), help_text=_('Maximum 999.99'), 
                                        error_messages={
                                            "name":{
                                                'max_length':_("The price must be between o and 999.999."),
                                            },
                                        }, 
                                        max_digits=8,
                                        decimal_places=0,
                                        )
    is_acitve = models.BooleanField(verbose_name=_('Product Visibility'), help_text=_("Change product Visibility"), default=True)
    created_at = models.DateField(_('Created at'), auto_now_add=True)
    updated_at = models.DateField(_('Updated at'), auto_now=True)
    
    
    class Meta:
        ordering = ('-created_at',)
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        db_table="Product"
    
    def get_absolute_url(self):
        return reverse("store:product_detail", arg=[self.slug])
    
    def __str__(self):
        return self.title
    
    


class ProductSpecificationValue(models.Model):
    """
    The Product Specification Value table holds each of the
    products individual specification or bespoke features.
    """

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    specification = models.ForeignKey(ProductSpecification, on_delete=models.RESTRICT)
    value = models.CharField(
        verbose_name=_("value"),
        help_text=_("Product specification value (maximum of 255 words"),
        max_length=255,
    )

    class Meta:
        verbose_name = _("Product Specification Value")
        verbose_name_plural = _("Product Specification Values")
        db_table="ProductSpecificationValue"

    def __str__(self):
        return self.value


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_image')
    image=models.ImageField(verbose_name=_('image'), help_text=_('Upload a product image'), upload_to="images/", default="images/default.png")
    alt_text = models.CharField(verbose_name =_('Alternative text'), max_length=255, help_text=_("Please add alternative text"), null=True, blank=True)
    is_feature = models.BooleanField(default=False)
   
    created_at = models.DateField(_('Created at'), auto_now_add=True, editable=True)
    updated_at = models.DateField(_('Updated at'), auto_now=True)    
    
    class Meta:
        db_table= 'ProductImage'
        verbose_name = _('Product Image')
        verbose_name_plural =_('Product Images')
    
  